<template>
    <div class="chengshi-tz">
        <!--  -->
        <div class="chengshi-tz-title">社会治理</div>
        <Cstzstatus @btnstatus="btnstatus" :icon="icon.shzlicon" :chengshitizheng='shehuizhili'/>
        <div class="chengshi-tz-title">行政监管</div>
        <Cstzstatus @btnstatus="btnstatus" :icon="icon.xzicon" :chengshitizheng='xingzhengjianguan'/>
        <div class="chengshi-tz-title">城市安全</div>
        <Cstzstatus @btnstatus="btnstatus" :icon="icon.csicon" :chengshitizheng='chengshianquan'/>
    </div>
</template>
<script setup>
import Cstzstatus from "components/cstz/cstzstatus.vue";
const props=defineProps({
    shehuizhili:{
        type:Array,
        default:()=>[]
    },
    xingzhengjianguan:{
        type:Array,
        default:()=>[]
    },
    chengshianquan:{
        type:Array,
        default:()=>[]
    }

})
const icon = reactive({
    shzlicon:'/src/assets/image/wuranbg.png',
    xzicon:'/src/assets/image/csbg.png',
    csicon:'/src/assets/image/shzlbg.png'
})

const emit=defineEmits(['btnstatus'])
const btnstatus=(item)=>{
    emit('btnstatus',item)
}

</script>
<style lang="scss" scoped>
    .chengshi-tz{
        width: 100%;
        height:100%;
        // height: 1000px;
        overflow: hidden;
        overflow: auto;
        padding: 0 0 30px 0;
        // background-color: aquamarine;
        .chengshi-tz-title{
            // padding-top: 30px;
            margin: 30px 0 10px 3%;
            font-size: 20px;
           
        }
    }
</style>
