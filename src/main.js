// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/login";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// import './http'
import Mock from './mock'
Mock.init()
import { getCookie } from "@/utils/auth";
Vue.use(ElementUI)
Vue.use(Mint)
Vue.config.productionTip = false
// var getCookie = true
// console.log(!getCookie())
router.beforeEach((to, from, next) => {
  if (to.meta.request) {
    if (to.path == "/login") {
      next();
    } else {
      if (!getCookie()) {
        next("/login");
      } else {
        next();
      }
    }
  } else {
    if (to.path == "/home") {
      next("/home");
    } else {
      next();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
