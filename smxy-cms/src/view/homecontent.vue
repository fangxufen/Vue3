<template>
    <div class="home-content">
        <el-menu class="el-menu-vertical-demo" :default-active="Route.path" :router="true" >
            <!-- class="is-active" -->
            <div v-for="(item, index) in leftlist" :key="index + ''">
                <el-sub-menu :index="item.path" v-if="item.children">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item v-for="(i, num) in item.children" :key="num" :index="i.path">
                        <template #title>
                            <el-icon>
                                <component :is="i.icon" />
                            </el-icon>
                            <span>{{ i.name }}</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>
                <div v-else>
                    <el-menu-item :index="item.path">
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </div>
            </div>
        </el-menu>
        <!-- 中部路由 -->
        <div class="home-left">
            <router-view v-slot={Component}>
                <keep-alive>
                    <Component :is="Component"/>
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>
<script setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
// import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'
// import { useI18n } from 'vue-i18n'

const store = useStore()
const router = useRouter()
const Route = useRoute()
// 获取当前路由

console.log(Route.path, 8888)
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}

const leftlist = reactive([
    {
        id: 0,
        name: 'message.Home',
        icon: 'House',
        path:'/text'
    }, 
    {
        id: 1,
        name: 'message.Cockpit',
        icon: 'DataLine',
        path:'/cockpit'
    }, 
    {
        id: 2,
        name: 'message.Iconanalysis',
        icon: "Operation",
        path:'/chartanalysis',
        children: [
            {
                id: '2-1',
                name: 'message.Chart1',
                icon: 'Operation',
                path:'/chartanalysis',
            },
            {
                id: '2-2',
                name:'message.Chart2',
                icon: 'Operation',
                path:'/chartanalysis1'
            },
            {
                id: '2-3',
                name: 'message.Chart3',
                icon: 'Operation',
                path:'/chartanalysis2',
            }
        ]

    }, {
        id: 3,
        name: 'message.Mapcomponent',
        icon: "AddLocation",
        path:'/homemap'
    }, {
        id: 4,
        name: 'message.Listdisplay',
        icon: "Tickets",
        path:'/homelist'
    }
])
const btnleftnav = (item, index) => {
    // console.log(item.name)
    // console.log(index)
    // if (item.id == 0) {
    //     router.push('/homepage')
    // } else if (item.id == 1) {
    //     router.push('/chartanalysis')
    // } else if (item.id == 2) {
    //     router.push('/homemap')
    // } else if (item.id == 3) {
    //     router.push('/homelist')
    // }
    // router.push('/chartanalysis')
}
</script>
<style lang="scss" scoped>
.home-content {
    display: flex;
    width: 100%;

    // .el-menu-vertical-demo{
    //     width: 500px;
    // }
    .el-menu {
        // width: 500px;
        width: 180px;
        ::v-deep(.el-sub-menu.is-active .el-sub-menu__title){
            // background: -webkit-gradient(linear, left top, right top, from(#60AFFA), to(#647DF5));
            // background-color: aquamarine;
            color: var(--el-menu-active-color);
        }
        ::v-deep(.el-menu-item){
            width: 180px;
        }
        ::v-deep(.el-sub-menu .el-menu-item){
            min-width: 180px;
        }
    }

    .home-left {
        // min-width: 1275px;
        min-width: calc(100% - 180px);
        height: 100%;
        // background-color: aquamarine;
    }
}
</style>
