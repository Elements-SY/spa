<template>
  <div class="line_echarts">
    <!-- Line 折线图 -->
    <div ref="line_echarts" style="width: 100%; height:360px;"></div>
  </div>
</template>
<script>
export default {
  data () {

  },
  mounted () {
    let lineEcharts = this.$echarts.init(this.$refs.line_echarts)
    this.drawLine();
    // 视口改变则重新init画布
    window.addEventListener('resize', () => {
      lineEcharts.resize();
    })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let lineEcharts = this.$echarts.init(this.$refs.line_echarts)
      // Line 折线图 指定图表的配置项和数据
      let lineOption = {
        title: [{
          text: '{b_title|收入趋势}{b_unit|（单位/万元）}',
          textStyle: {
            rich: {
              b_title: {
                color: 'red',
              },
              b_unit: {
                color: 'blue',
              }
            }
          }
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          x: 'right',
          data: ['邮件营销', '联盟广告', '视频广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          show: true, // 是否显示下载
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      // Line 折线图
      lineEcharts.setOption(lineOption);
    },
  }
}
</script>