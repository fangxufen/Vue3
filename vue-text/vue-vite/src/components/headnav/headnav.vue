<template>
    <div class="head-nav">
        <div class="head-left">
           <div class="head-scroll" :class="[navindex==index?'active':'active2']" v-for="(item,index) in headlist.value" :key="index" @click="changenav(item,index)">
                <div class="head-text">
                    {{item.type_name}}
                </div>
                <div v-show="navindex==index" class="line"></div>
            </div> 
        </div>
        
        <div class="head-icon">
            <img src="../../assets/search.png"/>
        </div>
    </div>
</template>
<script setup>
import { ref } from "@vue/reactivity"

const props=defineProps({
    headlist:{
        type:Array,
        default:()=>[]
    }

})
// console.log('头部',props.headlist)
const navindex=ref(0)
const emit = defineEmits(['changenav'])
const changenav=(item,index)=>{
    emit('changenav',item)
    navindex.value=index
    // console.log(item)
}


</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
	    display: none;
	}
   .head-nav{
      width: 750px;
      height: 100px;
      display: flex;
    //   background-color: aquamarine;
      box-shadow: 0px 0px 14px #c3c3c3;
      .head-left{
        flex:1;
        width: 650px;
        overflow-x: auto;
        flex-wrap: nowrap;
        display: flex;
        align-items: center;
        .head-scroll{
            // color: rgba(100,100,100,.9);
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            
            .head-text{
                white-space: nowrap;  /*强制span不换行*/
                display: inline-block;
                padding: 0 30px;
            }
            .line{
              width: 35px;
              height: 6px;
              background-color: #FFB001;
              position: absolute;
              top: 92px;
            //   padding-top: 20px;
            }
        }

      }
      .head-icon{
        width: 100px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow:
        -4px -4px 12px rgba(250, 250, 250, .9);
        img{
            width: 50px;
            height: 50px;
        }
      }
   }
   .active{
    //  background-color: antiquewhite;
     color: #FFB001;
     font-size: 38px;
   }
   .active2{
    color: rgba(100,100,100,.9);
    font-size: 30px;
   }
   
</style>