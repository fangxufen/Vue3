<template>
    <div class="home-head">
       <div id="container"></div>
       <el-button @click="clearCover" class="home-head-btn">清除覆盖物</el-button>
       <!-- <el-button @click="clearLayers" class="home-head-btn1">清除图层</el-button> -->
       <!-- <el-button @click="MarkerLayers1" class="home-head-btn2">路网图层</el-button>
       <el-button @click="MarkerLayers2" class="home-head-btn3">卫星图层</el-button> -->
       <div class="home-head-panel">
            <el-checkbox v-model="checked1" label="路网图层" size="large"  @change="MarkerLayers1"/>
            <el-checkbox v-model="checked2" label="卫星图层" size="large"  @change="MarkerLayers2"/>
       </div>
        <!-- <HelloWorld :msg="msg"/> -->
    </div>
</template>
<script setup>
// import HelloWorld from 'components/HelloWorld.vue';
// import { getHomeList } from 'api/home';
import AMapLoader from '@amap/amap-jsapi-loader';
// import { reactive, shallowRef } from '@vue/reactivity'
// const map =shallowRef(null)
let map,circle,amap,layer1,layer2;

const initmap=()=>{
    AMapLoader.load({
            key:"089dd59a702b483da220e2403b0fc3ff",             // 申请好的Web端开发者Key，首次调用 load 时必填
            version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap)=>{
             amap=AMap
             map = new AMap.Map("container",{  //设置地图容器id
                viewMode:"3D",    //是否为3D地图模式
                zoom:16,    //初始化地图级别
                terrain: true,       
                center:[119.526888,35.416377], //初始化地图中心点位置
             });
            // 获取点击的经纬度
            map.on("click",changeMap)
            
           
        }).catch(e=>{
            console.log(e);
        })
}
initmap()

// 撒点
const MarkerPoint=(icon,lng,lat)=>{
    let marker = new amap.Marker({
        icon: icon,
        position: [lng,lat],
        text:'666',
        offset: new amap.Pixel(0,0), 
    });
    // 撒点点击事件
    marker.on("click",()=>{
        MarkerClick(lng,lat)
    })
    map.add(marker);
}
// 点击撒点
const MarkerClick=(lng,lat)=>{
    // console.log(e)
    MarkerCircle(lng,lat)
}
// 画圆
const MarkerCircle=(lng,lat)=>{

    // 去除图形上的其他圆
    if(circle){
        map.remove(circle);
    }
    map.setCenter([lng,lat]);
    map.setZoom(18)
    circle = new amap.Circle({
        center: new amap.LngLat(lng, lat), // 圆心位置
        radius: 100,  //半径
        strokeColor: "#F33",  //线颜色
        strokeOpacity: 1,  //线透明度
        strokeWeight: 3,  //线粗细度
        fillColor: "#ee2200",  //填充颜色
        fillOpacity: 0.35 //填充透明度
    });
    map.add(circle);
}
// 点击地图获取经纬度
const changeMap=(e)=>{
    let icon='https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png'
    MarkerPoint(icon,e.lnglat.lng,e.lnglat.lat)
    console.log('点击地图撒点成功')
} 

const checked1=ref(false)
const checked2=ref(false)
// 添加路网图层
const MarkerLayers1=()=>{
    if(checked1.value==false){
         map.remove(layer1);
    }else{
        layer1 =  new amap.TileLayer.RoadNet();
        // 添加到地图上
        map.add(layer1); 
    }
    
}
// 添加卫星图层
const MarkerLayers2=()=>{
    if(checked2.value==false){
         map.remove(layer2);
    }else{
         layer2 = new amap.TileLayer.Satellite();
        // 添加到地图上
         map.add(layer2);  
    }
    
}

// 清除覆盖物
const clearCover=()=>{
    // 单独移除点标记
    // map.remove(marker);
    // 同时移除点标记和矢量圆形
    // map.remove([marker,circle]);
    // 使用clearMap方法删除所有覆盖物
    map.clearMap();
}




const msg=ref('首页首页首页首页')
const tablelist=reactive({});
const tableParams=reactive({
    page: 1,
    page_size: 12,
    domain_org_id: ''
});

</script>
<style lang="scss" scoped>
    .home-head{
        height: 100%;
        background-color: rgba(240,240,240,0.3);
        position: relative;
        .home-head-btn{
            position: absolute;
            top: 30px;
            left: 50px;
        }
        .home-head-btn1{
            position: absolute;
            top: 30px;
            left: 150px;
        }
        .home-head-btn2{
            position: absolute;
            top: 30px;
            left: 150px;
        }
        .home-head-btn3{
            position: absolute;
            top: 30px;
            left: 250px;
        }
        .home-head-panel{
            position: absolute;
            top: 30px;
            right: 5%;
            padding: 5px 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 20px rgba(180,180,180,0.8);
            background-color: #fff;
        }
    }
    #container{
        padding:0px;
        margin: 0px;
        width: 100%;
        height: 100%;
    }
</style>
