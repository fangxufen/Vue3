<template>
    <div class="page-status">
        <div v-for="(item,index) in statuslist" :key="index" class="page-status-item" @click="btnstatus(item)">
            <div class="page-status-image">
                <img :src='item.icon'>
            </div>
            <div class="page-status-title">
                <div>
                    {{item.name}}
                </div>
                <div>
                    {{item.value}}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {getEventqingkuang} from 'api/home'
defineProps({
    statuslist:Array,
    default:()=>[]
})

const emit=defineEmits(['btnstatus'])
const btnstatus=(item)=>{
    emit('btnstatus',item)
}

// 测试异步
// const textlist=ref([])
// try{
//     const list=await getEventqingkuang()
//     textlist.value=list
//     console.log(textlist.value)
// }catch{
//     console.log('查询失败')
// }

</script>
<style lang="scss" scoped>
    .page-status{
    //    width: 100%;
       min-width: 1000px;
       display: flex;
       justify-content:space-between;
       padding: 0 80px;
        .page-status-item{
            display: flex;
            align-items: center;
            
            width: 300px;
            height: 140px;
            background-color: #fff;
            margin: 50px 0;
            box-shadow: 0px 0px 10px rgba(200,200,200,0.5);
            .page-status-image{
                width: 50%;
                text-align: center;
                img{
                    width: 65px;
                    height: 65px;
                }
            }
            .page-status-title{
                flex: 1;
                margin-bottom: 20px;
                // #959595
                  div:nth-child(1){
                    color: #959595;
                    margin: 15px 0;
                  }
                  div:nth-child(2){
                    font-size: 20px;
                    font-weight: bold;
                    color: #666666;
                  }
            }
        }
    }
</style>