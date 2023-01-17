<template>
    <div class="page-echarts">
        <!-- 图表分析 -->
        <!-- <div v-for="(item,index) in typedata.value" :key="index">
            <div>{{item.name}}</div>
        </div> -->
        <div id="pie" style="min-width:500px;height:500px" ></div>
        <div id="qushi" style="width:600px;height:450px" ></div>
    </div>
</template>
<script setup>
import * as echarts from 'echarts'

const props= defineProps({
    typedata:{
        type:Array,
        default:()=>[]
    },
    list:{
        type:Array,
        default:()=>[]
    },
    qushidata:{
        type:Array,
        default:()=>[]
    },
    qingkuangdata:{
        type:Array,
        default:()=>[]
    }
})  
setTimeout(()=>{
    // 饼图
    let chartPie=echarts.init(document.getElementById("pie"))
    let optionPie={
            title: {
            text: '事件类型占比',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        }, 
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data:props.typedata,
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]        
    }
    chartPie.setOption(optionPie)

    // 面积图
    let dataX1=[]
    props.qushidata.forEach(d=>{
        dataX1.push(d.value)  
    })
    let dataX2=[]
    props.qingkuangdata.forEach(d=>{
        dataX2.push(d.count)  
    })
    let dataX=[]
    props.qushidata.forEach(d=>{
        dataX.push(d.name)  
    })

    let chartQushi=echarts.init(document.getElementById("qushi"))
    let optionQushi={
            title: {
                text: '事件趋势'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
                }
            },
            legend: {
                data: ['Email', 'Union Ads']
            },
            toolbox: {
                feature: {
                saveAsImage: {}
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
                type: 'category',
                boundaryGap: false,
                data:dataX
                }
            ],
            yAxis: [
                {
                type: 'value'
                }
            ],
            series: [
                {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                 data: dataX1
                },
                {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                 data:dataX2
                },
            ]
    }
    chartQushi.setOption(optionQushi)
},1000)   
</script>
<style lang="scss" scoped>
    .page-echarts{
        min-width: 1000px;
        display: flex;
        justify-content:space-around;
        padding: 0 60px;
    }
</style>
