<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
       <el-table :data="series" border stripe>
        <el-table-column type="index"></el-table-column>
        <!-- 数据放反了 -->
        <el-table-column label="2017-12-27" prop="data[0]"></el-table-column>
        <el-table-column label="2017-12-28" prop="data[1]"></el-table-column>
        <el-table-column label="2017-12-29" prop="data[2]"></el-table-column>
        <el-table-column label="2017-12-30" prop="data[3]"></el-table-column>
        <el-table-column label="2018-1-1" prop="data[4]"></el-table-column>
       </el-table>
       <!-- 设置间隔 -->
       <br>   
      <!-- 2. 为ECharts准备一个具备大小（宽高）的Dom -->
      <div id="main" style="width: 750px;height:400px;">

      </div>
    </el-card>
  </div>
</template>

<script>
// 1. 导入 echarts
import echarts from 'echarts'
import _ from 'lodash'

export default {
  data() {
    return {

      series: [],
      // 需要合并的数据
      options: {
        title: {
          text: '数据报表'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#E9EEF3'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ]
      }
    }
  },
  created() {
    this.getseries()
  },
  // 此时，页面上的元素，已经被渲染完毕了！
  async mounted() {
    // 3. 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'))

    const { data: res } = await this.$http.get('reports/type/1')
    if (res.meta.status !== 200) {
      return this.$message.error('获取折线图数据失败！')
    }
    // console.log(res.data)
    this.series = res.data.series

    // 4. 准备数据和配置项
    const result = _.merge(res.data, this.options)

    // 5. 展示数据
    myChart.setOption(result)
  },
  methods: {
    // getseries
  }
}
</script>

<style lang="less" scoped>

</style>