<template lang='pug'>
  .main
    .index-top.clear
      .index-top--item
        .title 年能源消耗
        .top-list
          p
            span.item-sort 电：
            span.num 13920601 kWh
            span 同比：
            span.rate.rate__down -5.6% ↓
          p
            span.item-sort 水：
            span.num 1253 m³
            span 同比：
            span.rate.rate__down -7.9% ↓
          p
            span.item-sort 蒸汽：
            span.num 1932016 t
            span 同比：
            span.rate.rate__up +10% ↑
          p
            span.item-sort 空气：
            span.num 1728 Nm³
            span 同比：
            span.rate.rate__up +10% ↑
      .index-top--item
        .title.title__orange 月能源消耗
        .top-list
          p
            span.item-sort 电：
            span.num 13920601 kWh
            span 同比：
            span.rate.rate__down -5.6% ↓
          p
            span.item-sort 水：
            span.num 1253 m³
            span 同比：
            span.rate.rate__down -7.9% ↓
          p
            span.item-sort 蒸汽：
            span.num 1932016 t
            span 同比：
            span.rate.rate__up +10% ↑
          p
            span.item-sort 空气：
            span.num 1728 Nm³
            span 同比：
            span.rate.rate__up +10% ↑
      .index-top--item
        .title.title__blue 日能源消耗
        .top-list
          p
            span.item-sort 电：
            span.num 13920601 kWh
            span 同比：
            span.rate.rate__down -5.6% ↓
          p
            span.item-sort 水：
            span.num 1253 m³
            span 同比：
            span.rate.rate__down -7.9% ↓
          p
            span.item-sort 蒸汽：
            span.num 1932016 t
            span 同比：
            span.rate.rate__up +10% ↑
          p
            span.item-sort 空气：
            span.num 1728 Nm³
            span 同比：
            span.rate.rate__up +10% ↑
    .index-bottom.clear
      .index-chart-item
        .chart-top.clear
          span.chart-item__title 企业历年能耗
          .search-right
            el-date-picker.w126(size="mini",v-model="date",type="year")
            el-select.w80(size="mini",placeholder="")
              el-option(value="4",label="4年",size="mini")
            el-select.w80(size="mini",placeholder="")
              el-option(value="4",label="电",size="mini")
            el-button.index-btn(size="mini",type="primary") 查询
      .index-chart-item
        .chart-top.clear
          span.chart-item__title 企业单一能耗
          .search-right
            el-date-picker.w126(size="mini",v-model="date",type="year")
            span.range-label 至
            el-date-picker.w126(size="mini",v-model="date",type="year")
            el-button.index-btn(size="mini",type="primary") 查询
        .chart-bottom#chart1
      .index-chart-item
        .chart-top.clear
          span.chart-item__title 企业综合能耗
          .search-right
            el-date-picker.w126(size="mini",v-model="date",type="year")
            el-select.w80(size="mini",placeholder="")
              el-option(value="4",label="4年",size="mini")
            el-select.w126.ml20(size="mini",placeholder="",v-model="date")
              el-option(value="4",label="综合能耗",size="mini")
            el-button.index-btn(size="mini",type="primary") 查询
        .chart-bottom
      .index-chart-item
        .chart-top.clear
          span.chart-item__title 2017-01至2017-12月报数据比较分析
          .search-right
            el-date-picker.w126(size="mini",v-model="date",type="year")
            el-select.w80(size="mini",placeholder="")
              el-option(value="4",label="4年",size="mini")
            el-select.w80(size="mini",placeholder="")
              el-option(value="4",label="电",size="mini")
            el-button.index-btn(size="mini",type="primary") 查询
</template>

<script>
export default {
  name: 'general',
  data() {
    return {
      date: ''
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      let chart1 = this.$echarts.init(document.getElementById('chart1'));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      chart1.setOption(option);
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/_mixin';
.chart-bottom {
  width: 100%;
  height: 100%;
}
.range-label {
  @include fs(vm(14), #fff);
  margin: 0 vm(10);
}
.index-btn {
  margin-left: vm(20);
  span {
    font-weight: bold;
  }
}
.w126 {
  width: vm(126);
}
.w106 {
  width: vm(106);
}
.w80 {
  width: vm(80);
  margin-left: vm(20);
}
.index-chart-item {
  background: #216894;
  padding: vm(24) vm(19);
  width: vm(830);
  height: vmh(335);
  min-height: 250px;
  margin-bottom: vm(9);
  margin-right: vm(15);
  float: left;
  &:nth-child(even) {
    margin-right: 0;
  }
  &:nth-child(3),
  &:nth-child(4) {
    margin-bottom: 0;
  }
  .chart-item__title {
    @include fs(vm(20), #fff);
  }
  .search-right {
    float: right;
  }
}
.index-top {
  margin-bottom: vm(21);
}
.index-top--item {
  @include wh(vm(546), vm(226));
  background: #004a75;
  color: #fff;
  border-radius: vm(5);
  margin-right: vm(19);
  float: left;
  padding: vm(22) vm(32);
  &:last-child {
    margin-right: 0;
  }
  .title {
    @include fs(vm(22), #fff);
    margin-bottom: vm(26);
    font-weight: bold;
    position: relative;
    padding-left: vm(12);
    &:before {
      content: '';
      display: block;
      @include wh(1px, vm(20));
      border-left: vm(4) solid #ffd018;
      top: vm(4);
      position: absolute;
      left: 0;
    }
    &.title__orange {
      &:before {
        border-left: vm(4) solid #ff8042;
      }
    }
    &.title__blue {
      &:before {
        border-left: vm(4) solid #00eafc;
      }
    }
  }
}
.top-list {
  margin: 0 vm(8);
  & > p {
    line-height: vm(30);
    font-size: vm(18);
    .item-sort {
      letter-spacing: vm(10);
      width: vm(84);
      display: inline-block;
      text-align: right;
    }
    .num {
      width: vm(216);
      display: inline-block;
      font-weight: bold;
    }
    .rate {
      font-weight: bold;
      &.rate__down {
        color: #16ffa4;
      }
      &.rate__up {
        color: #ff414a;
      }
    }
  }
}
</style>

