<template>
    <div class="estate-charts">
        <div class="charts-title line border-bottom arrow">
            <div class="left-title">深圳房产行情</div>
        </div>
        <v-chart :options="polar"/>
    </div>
</template>

<script>
import ECharts from 'vue-echarts'
export default {
    name: 'estate-charts',
    components: {
        'v-chart': ECharts
    },
    data () {
        return {
            polar: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        label: {
                            backgroundColor: 'rgba(245,245,245,0.6)'
                        }
                    }
                },
                legend: {
                    data: ['报盘均价', '成交面积'],
                    left: 30,
                    bottom: 0
                },
                grid: {
                    top: 50,
                    left: 50,
                    right: 50
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: true,
                    axisLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        color: '#666'
                    },
                    data: (function () {
                        var now = new Date()
                        var res = []
                        var len = 6
                        while (len--) {
                            res.unshift(now.getHours() + 'h')
                            now = new Date(now - 3600000)
                        }
                        return res
                    })()
                }],
                yAxis: [{
                    type: 'value',
                    scale: true,
                    name: '报盘均价(元/㎡)',
                    nameTextStyle: {
                        color: '#3c3c3c',
                        align: 'left'
                    },
                    max: 30,
                    min: 0,
                    boundaryGap: [0.5, 0.5],
                    axisLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        color: '#666'
                    }
                },
                {
                    type: 'value',
                    scale: true,
                    name: '成交面积(㎡)',
                    nameTextStyle: {
                        color: '#3c3c3c',
                        align: 'right'
                    },
                    max: 120,
                    min: 0,
                    boundaryGap: [0.5, 0.5],
                    axisLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        color: '#666'
                    }
                }],
                series: [{
                    name: '成交面积',
                    type: 'bar',
                    barWidth: 25,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,103,103,0.8)'
                        }
                    },
                    data: (function () {
                        var res = []
                        var len = 6
                        while (len--) {
                            res.push(Math.round(Math.random() * 100))
                        }
                        return res
                    })()
                },
                {
                    name: '报盘均价',
                    type: 'line',
                    data: (function () {
                        var res = []
                        var len = 0
                        while (len < 6) {
                            res.push((Math.random() * 6 + 5).toFixed(1) - 0)
                            len++
                        }
                        return res
                    })()
                }]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.estate-charts{
    margin-top: 25/$rem;
    background-color: #fff;
    .charts-title{
        font-size:34/$rem;
        font-weight:500;
        color: #000;
    }
    .echarts {
        width: 100%;
        height: 700/$rem;
        padding-bottom: 30/$rem;
    }
}
</style>
