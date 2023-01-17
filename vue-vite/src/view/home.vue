<template>
    <!-- <div class="home"> -->
        <!-- <div class="home-head">
            5555
        </div> -->
        <el-container class="home">
            <el-header class="home-head">
                <Homehead/>
            </el-header>
            
            <el-container class="home-con">
                <!-- <el-aside width="200px">Aside</el-aside>
                <el-main></el-main> -->
              <router-view></router-view>
            </el-container>
        </el-container>
        <!-- <HelloWorld/> -->
    <!-- </div> -->
</template>
<script setup>
import Homehead from './home/homehead.vue';


</script>
<style lang="scss" scoped>
    .home{
        min-width: 1600px;
        // width: 100vh;
        height: 100vh;
        display: flex;
        .home-head{
            height: 60px;
        }
        .home-con{
           margin-top: 0px;
           height: calc(100vh - 60px);
        }
    }
    .el-header{
        // background-color: rgba(200,200,200,0.8);
        // border-bottom: 1px solid red;
        box-shadow: 0px 0px 4px rgba(160,160,160,0.8);
    }
</style>