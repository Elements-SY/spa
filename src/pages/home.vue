<template>
  <div class="home">
    <ul>
      <li
        v-for="(item,index) in navList"
        :class="{active_border:active==index}"
        @click="toggleMenu(index,item)"
        :key="index"
      >
        <a href="javascript:;">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      active: 0,
      navList: [
        {
          name: '首页'
        },
        {
          name: '新闻'
        },
        {
          name: '关于'
        }
      ]
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    toggleMenu (index, item) {
      this.active = index;
    }
  },
  watch: {

  },
}
</script>
<style lang="scss" scoped>
@import '../style/common/color.scss';
ul {
  display: flex;
}
li {
  flex: 1;
  text-align: center;
  line-height: 80px;
}
</style>