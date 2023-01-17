<template>
    <div class="text">
        <div v-for="(item,index) in textobj" :key="index">
            <el-button @click="emit('btnname',1)">{{item.name}}</el-button>
            <el-button @click="emit('btnname',-1)">{{item.name1}}</el-button>
            <div @click="btnphone(222)">电话：{{item.phone}}</div>
            <div>姓名：{{item.age}}</div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    textobj:Array
})
// 向父组件传值
const emit = defineEmits(['btnname','btnphone'])

const btnphone=(item)=>{
    emit('btnphone',item)
}
// const onclick=()=>{
//     emit('btnname')
// }
    

</script>
<style lang="scss" scoped>
.text{
 width: 10rem;
 height: 10rem;
 background-color: brown;
}
</style>