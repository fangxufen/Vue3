import { nextTick } from 'vue';
import { createRouter, createWebHashHistory ,createWebHistory} from 'vue-router';
// // 路由懒加载
const home=()=>import("view/home/home.vue")

const routes=[
    {
        path:'',
        redirect: '/home',
    },
    {
        path:'/home',
        component:home,
        children: [
        ]
        
    }
];
const router =createRouter({
    // History模式
    // Hash模式
    history:createWebHistory(),
    routes
});

export default router