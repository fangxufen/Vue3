import { nextTick } from 'vue';
import { createRouter, createWebHashHistory ,createWebHistory} from 'vue-router';
// // 路由懒加载
const home=()=>import("view/home.vue")
const homecontent=()=>import("view/home/homecontent.vue")
// 中部路由
const homepage=()=>import("view/home/homeright/homepage.vue")
const cockpit=()=>import("view/home/homeright/cockpit.vue")
const chartanalysis=()=>import("view/home/homeright/chartanalysis.vue")
const chartanalysis1=()=>import("view/home/homeright/chartanalysis1.vue")
const homemap=()=>import("view/home/homeright/homemap.vue")
const homelist=()=>import("view/home/homeright/homelist.vue")

// 城市体征详情
const jiancechaobiao=()=>import("components/cstzdetail/jiancechaobiao.vue")

// 登录
const login=()=>import("view/login/login.vue")

const user=()=>import("view/user.vue")
const homeroutes=[
    {
        path: '',
        redirect:'/homecontent'
    },
    {
        path:'/homecontent',
        component:homecontent,
        children: [
            {
                path: '',
                redirect:'/homepage'
            },
            {
                path:'/homepage',
                component:homepage,
                meta: {
                    id:0,
                    title: '首页'
                }
            },
            {
                path:'/cockpit',
                component:cockpit,
                meta: {
                    id:1,
                    title: '驾驶舱'
                },
                children:[
                    {
                        
                        path:'/jiancechaobiao',
                        component:jiancechaobiao,
                        meta: {
                            id:0,
                            title: '污染源'
                        }
                    }
                ]
            },
            {
                path:'/chartanalysis',
                component:chartanalysis,
                meta: {
                    id:2,
                    title: '图表分析'
                }
            },{
                path:'/homemap',
                component:homemap,
                meta: {
                    id:3,
                    title: '地图组件'
                }
            },{
                path:'/homelist',
                component:homelist,
                meta: {
                    id:4,
                    title: '列表展示'
                }
            },{
                path:'/chartanalysis1',
                component:chartanalysis1,
                meta: {
                    id:5,
                    title: '图表分析1'
                }
            }
        ]  
    }
]
const routes=[
    {
        path:'',
        redirect: '/home',
    },
    {
        path:'/home',
        component:home,
        children: [
            ...homeroutes
        ]
        
    },{
        path:'/user',
        name:'user',
        component:user
    },
    {
        path:'/login',
        name:'login',
        component:login
    }
];
const router =createRouter({
    // History模式
    // Hash模式
    history:createWebHistory(),
    routes
});
// 路由导航守卫
// 用于判断用户的token
router.beforeEach((to,from,next)=>{
    // next()//直接进to 所指路由
    // next(false) //中断当前路由
    // next('route') //跳转指定路由
    // next('error') //跳转错误路由
    // to.path//路由要跳转的页面
    
    if(to.path==='/login'){
        return next();
    }
    const tokenStr=window.sessionStorage.getItem('Token')
    if(tokenStr){
        next()
    }else{
        next()
    }
})
export default router