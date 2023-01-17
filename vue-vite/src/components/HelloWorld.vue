<template>
<div class="hello-word">
  <h1>{{ msg }}</h1>

  <CountTo :startVal="0" :endVal="3000.22" :decimals="2" :duration="1000"/>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  
  <button class="button" @click="emit('myclick')">向父组件传</button>
  <p>{{$store.state.home.couter}}</p>
  <div>
    store:=>{{num2}}
  </div>
  <el-button type="success"  @click="upcouter">修改stote</el-button>
  <el-button type="success"  @click="upcouter1">stote+1</el-button>
  <el-button type="success"  @click="upcouter2">actions</el-button>
  <div  style="height:1500px;width:500px;background-color: aqua;">
    ss1
  </div>
  <!-- 异步组件优化性能 -->
  <div ref="target"> 
    <Text v-if="textshow" :textobj='textobj' @btnname='btnname' @btnphone='btnphone'/>
  </div>
  

  <div>computed和：{{ageN}}</div>

  <!-- <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>   -->
  
</div>
</template>

<script setup>
import { CountTo } from 'vue3-count-to';


// 导入vueuse,异步组件

import {useIntersectionObserver} from '@vueuse/core'
import { ref } from 'vue-demi';

import { useStore } from 'vuex';
// import { ref,reactive, computed, defineAsyncComponent} from 'vue'
// import Text from 'components/text.vue'

// const Text=defineAsyncComponent(()=>{
//   import('components/text.vue')
// })



const textshow=ref(false);
const target=ref(null);

try{
const {stop} =useIntersectionObserver(
  target,
  ([{isIntersecting}])=>{
    if(isIntersecting){
      textshow.value=isIntersecting
      console.log(isIntersecting,6666)
    }
  }
) 
}catch{
  console.log('失败')
}

// const loading =


defineProps({
  msg: String,
  default:()=>''
})

const count = ref(0)
// 属性定义
const num=ref("55552222")
const obj=reactive({name:'fxf'})

// 定义事件
const emit=defineEmits(['myclick'])

const onclick=()=>{
  emit('myclick')
}

// setup使用vuex里面方法
const store=useStore()
//要动态改变num2的值必须要
const num2 = computed(()=>store.state.home.couter)
const upcouter=()=>{
  store.commit('setstate',8)
}
const upcouter1=()=>{
  store.commit('addcouter')
}
const upcouter2=()=>{
  store.dispatch('btnactions')
}

const textobj=reactive([
  {
    name:'方+1',
    name1:'方-1',
    phone:'13799168067',
    age:21
  },
  {
    name:'李+1',
    name1:'李-1',
    phone:'13799168067',
    age:21
  }
])
// 计算属性
// 不支持异步但支持缓存，一个数据由多个数据得来，当其中依赖的数据发生变化这会请求computed
const ageN=computed(()=>{
  return textobj[0].age+textobj[1].age
})

const btnname=(item)=>{
  console.log(item,555)
  if(item==1){
    textobj.forEach(d=>{
        d.age+=1
      })
  }else{
    textobj.forEach(d=>{
      d.age-=1
    })
  }
}
const btnphone=(item)=>{
  console.log(item,6666)
}
// watch监听属性 
// 监听数据的变化、支持异步不支持缓存

// watch(
//   textobj,
//   newVal=>{
//     console.log(newVal,11)
//   }
// )
// 深度监听
watch(
  ()=>textobj[0].age,
  newVal=>{
    console.log(newVal,'监听到age的变化')
  }
)

const startVal=ref(0)
const endVal=ref(2022)

</script>
<style lang="scss" scoped>

.hello-word{
  background-color: aquamarine;
  .button{
    background-color: red;
  }
}
.read-the-docs {
  color: #888;
}
</style>
