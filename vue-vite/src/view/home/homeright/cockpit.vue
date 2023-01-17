<template>
    <div class="cockpit">
        <div class="cockpit-box">
            <div class="cockpit-box-nav" >
                <el-tabs  class="demo-tabs" @tab-click="btnnav">
                    <div v-for="(item,index) in navlist" :key="index">
                      <el-tab-pane :label="$t(item.name)" :name="item.id"></el-tab-pane>
                    </div>
                </el-tabs>
            </div>
            <!-- 城市体征 -->
            <div class="cockpit-box-content" >
                <Chengshitizheng v-loading="loadingtz" v-if="nvaindex==0" 
                :xingzhengjianguan="xingzhengjianguan" 
                :shehuizhili='shehuizhili' 
                :chengshianquan='chengshianquan'
                @btnstatus='btnstatus'/>
                <Homelist v-if="nvaindex==3" />  
                <router-view v-if="nvaindex==-1"></router-view>
            </div>
            
        </div>
        
    </div>
</template>
<script setup>
import 
{getWuranyuan,getKongqi,getjiDongche,getchengGuanlian,getLvguan,
getlvGuanruzhu,getJingwai,getKeliuliang,getxuexiao,getxuesheng,
gethehu,getshuiku,getWeihuapin,getchengshidaolu,getnongtian,getyuchuan,geterjiyun,getjiangpai,getsaishi
} from 'api/cockpit'
import Chengshitizheng from './cockpit/chengshitizheng.vue'
import Homelist from './homelist.vue';

const router = useRouter()
const Route = useRoute()

const navlist=reactive([
    {
        id:0,
        name:'message.Urbansigns'
    },{
        id:1,
        name:'message.Hotlinesigns'
    },{
        id:2,
        name:'message.Economicsigns'
    },{
        id:3,
        name:'message.Earlywarningmonitoring'
    }
])
const nvaindex=ref(0)
const btnnav=(item)=>{
    nvaindex.value=item.index
    if(Route.meta.title!=='驾驶舱'){
        router.push('/cockpit')
    }
    
}

const loadingtz=ref(false)

const chengshianquan=ref([])
const shehuizhili=ref([])
const xingzhengjianguan=ref([])
const getchengshitizheng=async ()=>{
    loadingtz.value=true
// 社会治理
try{
    getWuranyuan().then(res=>{
        res.forEach(d=>{
            d.value=Number(d.value)
        })
        shehuizhili.value.splice(0,0,res[0])
    })
    getKongqi().then(res=>{

        res.forEach(d=>{
            d.name=d.NAME
            d.value=Number(d.VALUE)
        })
         shehuizhili.value.splice(1,0,res[0])
    })
    getjiDongche().then(res=>{
        res.forEach(d=>{
            d.value=Number(d.value)
        })
         shehuizhili.value.splice(2,0,res[0])
    })
    getchengGuanlian().then(res=>{
        res.forEach(d=>{
            d.value=Number(d.value)
        })
         shehuizhili.value.splice(3,0,res[0])
    })
}catch(error){
    console.log(error,'城市体征社会治理获取失败')
}
// 行政监管
try{
    getLvguan().then(res=>{
        res.forEach(d=>{d.value=Number(d.value)})
        xingzhengjianguan.value.splice(0,0,res[0])
    })
    getlvGuanruzhu().then(res=>{
        res.forEach(d=>{d.value=Number(d.value)})
        xingzhengjianguan.value.splice(1,0,res[0])
    })
    getJingwai().then(res=>{
         res.forEach(d=>{d.value=Number(d.value)})
         xingzhengjianguan.value.splice(2,0,res[0])
    })
    getKeliuliang().then(res=>{
         res.forEach(d=>{d.value=Number(d.value)})
         xingzhengjianguan.value.splice(3,0,res[0])
    })
    getxuexiao().then(res=>{
        res.forEach(d=>{d.value=Number(d.value)})
        xingzhengjianguan.value.splice(0,0,res[0])
    })
    getxuesheng().then(res=>{
       res.forEach(d=>{d.value=Number(d.value)})
        xingzhengjianguan.value.splice(1,0,res[0])
    })
    
}catch(error){
    console.log(error,'城市体征行政监管获取失败')
}    
// 城市安全
try{
    gethehu().then(res=>{
        res.forEach(d=>{d.value=Number(d.value)})
        chengshianquan.value.splice(0,0,res[0])
    })
    getshuiku().then(res=>{
        res.forEach(d=>{d.value=Number(d.value)})
        chengshianquan.value.splice(1,0,res[0])
    })
    getWeihuapin().then(res=>{
         res.forEach(d=>{d.value=Number(d.value)})
         chengshianquan.value.splice(2,0,res[0])
    })
    getchengshidaolu().then(res=>{
         res.forEach(d=>{d.value=Number(d.value)})
         chengshianquan.value.splice(3,0,res[0])
    })
    getnongtian().then(res=>{
        res.forEach(d=>{d.value=Number(d.value)})
        chengshianquan.value.splice(4,0,res[0])
    })
    getyuchuan().then(res=>{
       res.forEach(d=>{d.value=Number(d.value)})
        chengshianquan.value.splice(5,0,res[0])
    })
    geterjiyun().then(res=>{
       res.forEach(d=>{d.value=Number(d.value)})
        chengshianquan.value.splice(6,0,res[0])
    })
    getjiangpai().then(res=>{
       res.forEach(d=>{d.value=Number(d.value)})
        chengshianquan.value.splice(7,0,res[0])
    })
    // getsaishi().then(res=>{
    //    res.forEach(d=>{d.value=Number(d.value)})
    //     chengshianquan.value.splice(1,0,res[0])
    // })
    const obj=await getsaishi()
    obj.forEach(d=>{d.value=Number(d.value)})
    chengshianquan.value.splice(8,0,obj[0])
    
}catch(error){
    console.log(error,'城市体征行政监管获取失败')
} 
loadingtz.value=false
}
getchengshitizheng()
// 点击翻牌器
const btnstatus=(item)=>{
    nvaindex.value=-1
    if(item.name.includes('污染源监测')){
        console.log(666)
        router.push('/jiancechaobiao')
    }else{
        console.log(888)
    }
    
    
   
}



</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
        display: none;
}
    .cockpit{
        width: 100%;
        height: 100%;
        background-color: rgba(240,240,240,0.3);
        margin: 0;
        display: flex;
        overflow: hidden;
        .cockpit-box{
            // margin-left: 20px;
            margin: 30px 30px;
            width: calc(100% - 60px);
            // height: calc(100% - 60px);
            display: flex;
            flex-direction: column;

            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(200,200,200,0.5);
            .cockpit-box-nav{
                width: 100%;
                height: 60px;
                border-radius: 10px;
                display: flex;
                ::v-deep(.el-tabs__nav){
                    height: 60px;
                    line-height: 60px;
                    padding-left: 20px;
                }
                .demo-tabs{
                    width: 100%;
                    // height: 80px;
                }
               
            }
            .cockpit-box-content{
                flex: 1;
                width: 100%;
                // height: calc(100% - 120px);
                height: calc(100% - 60px);
                overflow: hidden;
            }
        }
    }
</style>
