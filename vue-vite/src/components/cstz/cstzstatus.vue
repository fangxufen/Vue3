<template>
    <div class="cstz-status">
        <div v-for="(item,index) in chengshitizheng" :key="index" class="cstz-status-item" @click="btnstatus(item)">
            <div class="status-item-image">
                <img :src='icon'/>
            </div>
            <div class="status-item-stu">
                <div>
                    <span>{{item.name}}</span>
                </div>
                <div>
                    <CountTo :startVal="0" :endVal="item.value"  :duration="2000"/>
                    <span class="status-item-stu-suffix">{{item.suffix}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { CountTo } from 'vue3-count-to';
const props=defineProps({
    chengshitizheng:{
        type:Array,
        default:()=>[]
    },
    icon:{
        type:String,
        default:()=>''
    }
})
const emit = defineEmits(['btnstatus'])
const btnstatus=(item)=>{
    emit('btnstatus',item)
}
</script>
<style lang="scss" scoped>
    .cstz-status{
        display: flex;
        flex-wrap: wrap;
        .cstz-status-item{
            display: flex;
            align-items: center;
            // min-width: 22%;
            min-width: 325px;
            height: 150px;
            margin: 10px 3%;
            border-radius: 5px;
            box-shadow: 0px 0px 5px rgba(200,200,200,0.5);
            .status-item-image{
                min-width: 120px;
                text-align: center;
                img{
                    width: 80px;
                    height: 80px;
                    
                }
            }
            .status-item-stu{
                flex: 1;
                margin-bottom: 20px;
                // #959595
                  div:nth-child(1){
                    // width: 180px;
                    color: #959595;
                    margin: 15px 0;
                  }
                  div:nth-child(2){
                    font-size: 24px;
                    font-weight: bold;
                    color: #666666;
                  }
                  .status-item-stu-suffix{
                    font-size: 20px;
                    margin-left: 5px;
                  }
            }
        }
    }
</style>
