<template>
    <div class="page-echarts">
        <!-- 图表分析 -->
        <!-- <div v-for="(item,index) in typedata.value" :key="index">
            <div>{{item.name}}</div>
        </div> -->
        <div id="person" style="width:700px;height:500px" ></div>
        <!-- <div id="qushi" style="width:600px;height:450px" ></div> -->
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
    let dataX=[]
    props.qushidata.forEach(d=>{
        dataX.push(d.name)
    })
    // 人员折线图
    let chartPie=echarts.init(document.getElementById("person"))
    let optionPie={
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dataX
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [820, 932, 901, 934, 1290, 1330, 1320,546],
            type: 'line',
            areaStyle: {}
            }
        ]
    }
    chartPie.setOption(optionPie)
    // 面积图
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
