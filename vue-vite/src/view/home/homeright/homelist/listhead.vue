<template>
    <div class="list-head">
        <div class="list-head-frame">
            <div class="list-head-company">
                <el-icon style="width:25px;height:25px"  color="#409EFC"><OfficeBuilding/></el-icon>
                <el-select v-model="eventParams.orgName" @change="changeOrg" clearable placeholder="选择单位">
                    <el-option v-for="(item,index) in orgNameList" :key="index" :value="item.orgName" :prefix-icon="Search"/>
                </el-select>   
            </div>   
            <div class="list-head-type">
                <el-icon color="#409EFC"><Operation /></el-icon>
                <el-cascader @change="changeType" v-model="classname" :prefix-icon="Search" :options="classNameList" clearable placeholder="事件类型"/> 
            </div>
            <div class="list-head-input">
                <el-input @change="changeContent"  v-model="eventParams.content" placeholder="关键字" clearable :prefix-icon="Search"/>
            </div>
            <div>
                <el-date-picker @change="changeDate"  value-format="YYYY-MM-DD" type="date" placeholder="选择时间" v-model="eventParams.date"/>
            </div>
                

            <el-radio-group class="list-head-radio" v-model="eventParams.eventHasDetail" @change="changeHas">
                <el-radio label="">全部</el-radio>
                <el-radio :label="1">开单</el-radio>
                <el-radio :label="0">未开单</el-radio>
            </el-radio-group>

            <div class="list-head-select" @click="changeSelect">
                 <el-button :loading="loadingselect" type="primary" plain>查询</el-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import {  Search } from '@element-plus/icons-vue'
const props=defineProps({
    orgNameList:{
        type:Array,
        default:()=>[]
    },
    classNameList:{
        type:Array,
        default:()=>[]
    },
    loadingselect:{
        type:Boolean,
        default:()=>false
    }
})
const eventParams=reactive({
    // 关键字
	content: '',
    // 时间
	date: '',
    // 单位
	orgName: '',

	classCode: '',
    // 选择类型
	className: '',
    // 是否开单
	eventHasDetail: '',
	areaName:''
})
// 选择单位
const changeOrg=()=>{
    changeSelect()
}



// 选择类型
const classname=ref('')
const changeType=()=>{
    if(classname.value){
        eventParams.classCode=classname.value[2]
        changeSelect()
    }else{
        eventParams.classCode=''
    } 
}
// 关键字
const changeContent=()=>{
    changeSelect()
}

// 时间
const changeDate=()=>{
    changeSelect()
}
// 是否开单
const changeHas=()=>{
    console.log(eventParams.eventHasDetail)
}

const emit=defineEmits(['changeSelect'])
// 查询
const changeSelect=()=>{
    emit('changeSelect',eventParams)
}

</script>
<style lang="scss" scoped>

    .list-head{
        // width: 100%;
        padding-top: 30px;
        margin: 0 30px;
        // height: 120px;
        // background-color: #fff;
        .list-head-frame{
            width: 100%;
            height: 48px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(200,200,200,0.5);
            display: flex;
            align-items: center;
            ::v-deep(.el-input__icon){
                width: 25px;
                height: 25px;
                color: #409EFC;
            }
            
            ::v-deep(.el-select__icon){
                width: 25px;
                height: 25px;
                color: #409EFC;
            }
            .list-head-company{
                display: flex;
                align-items: center;
                margin-left: 10px;
                ::v-deep(.el-input){
                    width: 220px;
                }
            }
            .list-head-type{
                display: flex;
                align-items: center;
                ::v-deep(.el-input){
                    width: 220px;
                }
            }
            
            ::v-deep(.el-input__wrapper) {
                box-shadow: none !important;
                // background: transparent;
            }
            .list-head-input{
                ::v-deep(.el-input){
                    width: 250px;
                }
                
            }
            ::v-deep(.el-radio-group){
                    min-width: 240px;
            }

            .list-head-select{
                margin-left: 50px;
            }
        }

    }
</style>
