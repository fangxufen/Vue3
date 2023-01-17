<template>
   <div class="home">
    <!-- 导航栏 -->
    <Headnav :headlist='headlist' @changenav='changenav'/>
    <!-- 列表 -->
    <GameList :gamelist='typegamelist'/>
   </div>
</template>
<script setup>
import Headnav from 'components/headnav/headnav.vue';
import GameList from 'view/gamelist/gamelist.vue'
import {gethead,getgamelist} from 'api/home'
import { ref,reactive} from 'vue';

// 获取标题导航数据
const headlist=reactive([])
try{
    const classlist=await gethead()
    headlist.value=classlist.data.data
    // console.log(headlist)
}catch(error){
    console.log('获取导航数据失败',error)
}

// 获取列表数据
const gamelist=reactive([])
// 类型选择后处理的数据
const typegamelist=ref([])
try{
   const list=await getgamelist()
   gamelist.value=list.data.data.list
   gamelist.value.forEach(d=>{
    d.online_users=parseInt(Number(d.online_users)/10000)
    if(d.type_id==1){
        // console.log(d)
        typegamelist.value.push(d)
    } 
   })
   console.log('获取列表数据',typegamelist)
}catch(error){
   console.log('获取列表数据失败',error)
}


const changenav=(item)=>{
    typegamelist.value=[]
    gamelist.value.forEach(d=>{
        if(d.type_id==item.id){
            // console.log(d)
            typegamelist.value.push(d)
        } 
    })
    console.log('根据类别获取数据',typegamelist.value)
}

// 判断类型

</script>
<style lang="scss" scoped>
  .home-text{
    width: 750px;
    height: 100vh;
    background-color:aquamarine;
    display: flex;
    justify-content: space-between;
    div{
        width: 100px;
        height: 100px;
        background-color: aqua;
    }
  }
</style>