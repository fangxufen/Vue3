<template>
    <div class="home-list">
        <Listhead v-if="!eventShow" :loadingselect="loadingselect" :orgNameList='orgNameList' :classNameList='classNameList' @changeSelect='changeSelect'/>
        <!-- <el-button type="primary" @click="openFullScreen2"> As a service </el-button> -->
        <Listtable v-if="!eventShow" :loadingTable="loadingTable" :eventdata='eventdata' :eventObj='eventObj' @handleCurrentChange='handleCurrentChange' @eventDetail='eventDetail'/>
        
        <Eventmap :event="event"  @btnout="btnout" v-if="eventShow"/>
        <!-- <el-dialog
            v-model="dialogVisible"
            width="80%"
            :before-close="dialogClose">
        </el-dialog> -->

        

    </div>
</template>
<script setup>
import {getEventList,getOrgName,getClassCode} from 'api/home'
import Listtable from './homelist/listtable.vue';
import Listhead from './homelist/listhead.vue';
import Eventmap from 'components/map/eventmap.vue';
const router=useRouter()
// 单位下拉
const orgNameList=ref([])
try{
    // 获取单位下拉
   const orgnamelist=await getOrgName()
   orgNameList.value=orgnamelist
}catch(error){
   console.log(error,'单位下拉查询失败')
}

// 事件类型下拉
const classNameList=ref([])
try{
    const classnamelist=await getClassCode()
    classnamelist.forEach(d=>{
        d.label=d.eventClassName
        d.value=d.eventClassCode
        d.children.forEach(x=>{
            x.label=x.eventClassName
            x.value=x.eventClassCode
            x.children.forEach(i=>{
                i.label=i.eventClassName
                i.value=i.eventClassCode
            })
        })
    })
    classNameList.value=classnamelist
}catch(error){
    console.log(error,'事件类型下拉获取失败')
}


const eventListParams=reactive({
    pageNo: 1,
	pageSize: 8,
	content: '',
	date: '',
	orgName: '',
	classCode: '',
	className: '',
	eventHasDetail:'',
	areaName:''
})
const eventdata=ref([])
const eventObj=ref({})
const loadingTable=ref(false)
const getlist=async (eventListParams)=>{
    // const loading = ElLoading.service({
    //     lock: true,
    //     text: 'Loading',
    //     background: 'rgba(0, 0, 0, 0.7)',
    //     target:document.querySelector('text')
    // })
    loadingTable.value=true
    try{
        const obj=await getEventList(eventListParams)
        eventdata.value=obj.records
        eventObj.value=obj
    }catch(error){
        console.log(error);
    }
    loadingTable.value=false 
}

// 获取列表
getlist()
 



// 分页
const handleCurrentChange=(item)=>{
    eventListParams.pageNo=item
    getlist(eventListParams)
    // openFullScreen2()
}



// 查询
const loadingselect=ref(false)
const changeSelect=async (item)=>{
    loadingselect.value=true
    await getlist(item)
    loadingselect.value=false
}

// const dialogVisible = ref(false)
// const dialogClose=()=>{
//     dialogVisible.value=false
// }
const eventShow=ref(false)
const event=ref({})
// 点击事件详情
const eventDetail=(item)=>{
    eventShow.value=true
    event.value=item
    // console.log(event,'详情')
}
const btnout=()=>{
    eventShow.value=false
}



</script>
<style lang="scss" scoped>
    .home-list{
        width: 100%;
        height: 100%;
        background-color: rgba(240,240,240,0.3);
        .text{
            width: 100px;
            height: 100px;
            background-color: aqua;
        }
    }
</style>
