<template>
    <div class="home-page">
        <!-- <div>首页</div>
        <div>{{statustotal.value}}</div>
        <div>{{statustotal.name}}</div> -->
       
        <!-- <Pagestatus :statuslist='statuslist' @btnstatus='btnstatus'/> -->
        
        <!-- 图 -->
        <!-- <Pageecharts v-if="statusIndex==0" :typedata='typedata' :qushidata='qushidata' :qingkuangdata='qingkuangdata' />
        <Pagetoday v-if="statusIndex==1" :typedata='typedata' :qushidata='qushidata' :qingkuangdata='qingkuangdata' />
        <Pageperson v-if="statusIndex==2" :typedata='typedata' :qushidata='qushidata' :qingkuangdata='qingkuangdata' />
        <Pageplace v-if="statusIndex==3" :typedata='typedata' :qushidata='qushidata' :qingkuangdata='qingkuangdata'/> -->
    </div>
</template>
<script setup>
import Pagestatus from './homepage/pagestatus.vue'
import Pageecharts from './homepage/pageecharts.vue'

import Pagetoday from './homepage/pagetoday.vue'
import Pageperson from './homepage/pageperson.vue'
import Pageplace from './homepage/pageplace.vue'
import {getEventTotalCount,getEventTodayCount,getEventTypeZhanbi,getEventqushi,getEventqingkuang} from 'api/home'

const params=reactive({
    areaName:'岚山'
})
// 翻牌器
const statuslist=ref([])
// 饼图数据
const typedata=ref([])
// 面积图数据
const qushidata=ref([])
// 柱状图数据
const qingkuangdata=ref([])
onBeforeMount(()=>{
    try{
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    // 事件总数
    // 首页初步渲染不用异步await接收
    getEventTotalCount(params).then(res=>{
        const statustotal={
            value:res[0].eventTotalCount,
            name:res[0].title,
            icon:'/src/assets/image/sjicon.png'
        }
        setTimeout(()=>{
            statuslist.value.push(statustotal)
        },500)
        

        getEventTodayCount(params).then(res=>{
            const statustoday={
                value:res[0].eventTodayCount,
                name:res[0].title,
                icon:'/src/assets/image/shijianicon.png'
            }
            statuslist.value.push(statustoday)

            const obj1={
                name:'人员',
                value:15654,
                icon:'/src/assets/image/usericon.png'
            }
            const obj2={
                name:'区域',
                value:15,
                icon:'/src/assets/image/mapicon.png'
            }
            statuslist.value.push(obj1)
            statuslist.value.push(obj2)

            console.log(statuslist,6666)   
        })
    })
    // 今日事件总数
    
    
    // 事件类型占比
     getEventTypeZhanbi().then(res=>{
        res.forEach(d => {
            d.name=d.eventClassName
            d.value=d.count
            // console.log(d)
        });
        typedata.value=res
        console.log(typedata,'占比')
    })
    // 事件趋势
    getEventqushi().then(res=>{
         res.forEach(d => {
            d.name=d.eventTime
            d.value=d.count
            // console.log(d)
        });
        console.log(res,'趋势')
        qushidata.value=res
    })
    // 事件情况
    getEventqingkuang().then(res=>{
        qingkuangdata.value=res
        console.log(res,'情况')
    })
    loading.close() 
}catch(error){
    console.log('事件总数查询失败',error)
}
})

const statusIndex=ref(0)
const btnstatus=(item)=>{
    if(item.name=='事件总数'){
        statusIndex.value=0
    }else if(item.name=='今日事件总数'){
        statusIndex.value=1
    }else if(item.name=='人员'){
        statusIndex.value=2
    }else{
        statusIndex.value=3
    }
}





</script>
<style lang="scss" scoped>
    .home-page{
        height: 100%;
        background-color: rgba(240,240,240,0.3);
    }
</style>
