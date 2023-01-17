<template>
    <div class="page-echarts">
        <!-- 图表分析 -->
        <!-- <div v-for="(item,index) in typedata.value" :key="index">
            <div>{{item.name}}</div>
        </div> -->
        <div id="pie" style="width:500px;height:500px" ></div>
        <!-- <div id="qushi" style="width:800px;height:450px" ></div> -->
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
    let piedata=props.qingkuangdata
    piedata.forEach(d=>{
        d.value=d.count,
        d.name=d.areaName
    })
    // 饼图
    let chartPie=echarts.init(document.getElementById("pie"))
    let optionPie={
            title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        }, 
        legend: {
            orient: 'vertical',
            left: 'right'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data:piedata,
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
},1000)   
</script>
<style lang="scss" scoped>
    .page-echarts{
        min-width: 1200px;
        // display: flex;
        // justify-content:space-around;
        padding: 0 80px;
    }
</style>
