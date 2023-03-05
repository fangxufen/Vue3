import { nextTick } from 'vue';
import { createRouter, createWebHashHistory ,createWebHistory} from 'vue-router';
// // 路由懒加载
const index=()=>import("view/index.vue")
const text=()=>import("view/text.vue")

const homeroutes=[
    {
        path: '',
        redirect:'/text'
    },
    {
        path:'/text',
        component:text,
        children: [
            
        ]  
    }
]
const routes=[
    {
        path:'',
        redirect: '/index',
    },
    {
        path:'/index',
        component:index,
        children: [
            ...homeroutes
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