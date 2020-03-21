import Vue from 'vue'
import Router from 'vue-router'
const notFound = () => import('@/pages/404') // 404
const Register = () => import('@/pages/register') // 拥护注册
const Login = () => import('@/pages/login') // 用户登录
const restAccount = () => import('@/pages/restAccount') // 重置帐号信息
const Home = () => import('@/pages/home') // 首页
const About = () => import('@/pages/about') // 关于

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'notFound',
      component: notFound,
      meta: {
        request: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        request: true
      }
    },
    {
      path: '/restAccount',
      name: 'restAccount',
      component: restAccount
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        request: true
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        request: true
      },
    }
  ]
})