<template>
    <div class="page-echarts">
        <!-- 图表分析 -->
        <!-- <div v-for="(item,index) in typedata.value" :key="index">
            <div>{{item.name}}</div>
        </div> -->
        <div id="column" style="width:600px;height:500px" ></div>
        <div id="qushi" style="width:800px;height:450px" ></div>
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
    let dataX=[]
    props.typedata.forEach(d=>{
        dataX.push(d.name)  
    })
    let dataY=[]
    props.typedata.forEach(d=>{
        dataY.push(d.value)  
    })
    let chartColumn=echarts.init(document.getElementById("column"))
    let optionColum={
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dataX
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: dataY,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
            }
        ]     
    }
    chartColumn.setOption(optionColum)

    // 面积图
    // let dataX1=[]
    // props.qushidata.forEach(d=>{
    //     dataX1.push(d.value)  
    // })
    // let dataX2=[]
    // props.qingkuangdata.forEach(d=>{
    //     dataX2.push(d.count)  
    // })
    // let dataX=[]
    // props.qushidata.forEach(d=>{
    //     dataX.push(d.name)  
    // })

    // let chartQushi=echarts.init(document.getElementById("qushi"))
    // let optionQushi={
    //         title: {
    //             text: 'Stacked Area Chart'
    //         },
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //             type: 'cross',
    //             label: {
    //                 backgroundColor: '#6a7985'
    //             }
    //             }
    //         },
    //         legend: {
    //             data: ['Email', 'Union Ads']
    //         },
    //         toolbox: {
    //             feature: {
    //             saveAsImage: {}
    //             }
    //         },
    //         grid: {
    //             left: '3%',
    //             right: '4%',
    //             bottom: '3%',
    //             containLabel: true
    //         },
    //         xAxis: [
    //             {
    //             type: 'category',
    //             boundaryGap: false,
    //             data:dataX
    //             }
    //         ],
    //         yAxis: [
    //             {
    //             type: 'value'
    //             }
    //         ],
    //         series: [
    //             {
    //             name: 'Email',
    //             type: 'line',
    //             stack: 'Total',
    //             areaStyle: {},
    //             emphasis: {
    //                 focus: 'series'
    //             },
    //              data: dataX1
    //             },
    //             {
    //             name: 'Union Ads',
    //             type: 'line',
    //             stack: 'Total',
    //             areaStyle: {},
    //             emphasis: {
    //                 focus: 'series'
    //             },
    //              data:dataX2
    //             },
    //         ]
    // }
    // chartQushi.setOption(optionQushi)
},1000)   
</script>
<style lang="scss" scoped>
    .page-echarts{
        min-width: 1200px;
        display: flex;
        justify-content:space-around;
        padding: 0 80px;
    }
</style>
