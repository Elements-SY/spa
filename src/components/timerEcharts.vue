<template>
  <div ref="timer" :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '360px'
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart (nameList, jhList, wcList) {
      let timer = this.$echarts.init(this.$refs.timer)
      timer.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: function (a) {
            let jh = '';
            let wc = '';
            if (a[0] == undefined || a[0].data == null) {
              jh = "计划时间" + ":" + "未填写时间"
            } else {
              jh = a[0].seriesName + ":" + new Date(a[0].data).getFullYear() + '-' + (new Date(a[0].data).getMonth() + 1) + '-' + new Date(a[0].data).getDate();
            }
            if (a[1] == undefined || a[1].data == null) {
              wc = "完成时间" + ":" + "未填写时间"
            } else {
              wc = a[1].seriesName + ":" + new Date(a[1].data).getFullYear() + '-' + (new Date(a[1].data).getMonth() + 1) + '-' + new Date(a[1].data).getDate();
            }
            return jh + "</br>" + wc;
          }
        },
        legend: {
          data: ['计划时间', '完成时间']
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 40
            },
            boundaryGap: false,
            data: ['询价', '澄清', '保证金支付', '报价', '电子版标书', '封标', '投标', '投标保证金']

          }
        ],
        yAxis: [
          {
            type: 'time',
          }
        ],
        series: [
          {
            name: '计划时间',
            type: 'line',
            data: [1293811200000, 1356969600000, 1420141600000, 1483200000000, 1541272000000, 1603430400000, 1672502400000, 1735660800000, 1798732800000],
          },
          {
            name: '完成时间',
            type: 'line',
            data: [1293811200000, 1356969600000, 1420141600000, 1483200000000, 1541272000000, 1603430400000, 1672502400000, 1735660800000, 1798732800000],
          },
        ]
      })
    }
  }
}
</script>
