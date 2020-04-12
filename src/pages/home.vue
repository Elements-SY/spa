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
    <!-- Line 折线图 -->
    <line-echarts></line-echarts>
  </div>
</template>
<script>
import lineEcharts from '@/components/lineEcharts'
import { music_types, music_songs, music_singer, topics } from '@/http'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    'line-echarts': lineEcharts,
  },
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
      ],
      params: {
        page: 1,
        tab: 'job',
        limit: 1
      }
    }
  },
  created () {

  },
  mounted () {
    // 合并所有请求
    var allRequest = [
      this.getTopics(), // CNode主题首页
      this.musicTypes(), // 音乐类型
      this.musicSongs(), // 音乐列表
      this.musicSinger(), // 歌手列表
    ]
    axios.all(allRequest)
      .then(axios.spread((...agrs) => {
        console.log(agrs)
      })).catch(error => {
        console.log(error)
      })
  },
  methods: {
    toggleMenu (index, item) {
      this.active = index;
    },
    // CNode主题首页
    getTopics () {
      return topics(this.params).then(res => {
        return res
      }, err => {
        Object.keys(err).map((key) => {
          console.log(err[key])
          if (err[key].status == 404) {
            console.log('未找到该资源')
          }
        })
        return err
      }).catch(error => {
        console.log(error)
        return error
      })
    },
    // 音乐类型
    musicTypes () {
      return music_types(this.params).then(res => {
        return res
      }, err => {
        return err
      }).catch(error => {
        return error
      })
    },
    // 音乐列表
    musicSongs () {
      return music_songs(this.params).then(res => {
        return res
      }, err => {
        return err
      }).catch(error => {
        return error
      })
    },
    // 歌手列表
    musicSinger () {
      return music_singer(this.params).then(res => {
        return res
      }, err => {
        return err
      }).catch(error => {
        return error
      })
    },

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
.charts {
  width: 300px;
  height: 300px;
}
</style>