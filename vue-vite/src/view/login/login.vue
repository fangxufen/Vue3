<template>
    <div class="login">
        <div class="login-three" ref="screenDom"></div>
        <div class="login-main">
            <div class="form-title">
                <span class="ft-txt">登录</span>
                <span class="ft-split">/</span>
                <span class="ft-en">LOGIN</span>
            </div>
            <el-form ref="ref_form" :model="formLogin" :rules="rulesForm" label-width="0" size="large"
                class="login-form-class" @keyup.enter="submitForm(ref_form)">
                <el-form-item prop="login_id">
                    <el-input v-model="formLogin.login_id" :prefix-icon="UserFilled" placeholder="请输入用户名" clearable />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formLogin.password" :prefix-icon="Lock" placeholder="请输入密码" type="password"
                        show-password clearable />
                </el-form-item>
                <el-form-item class="form-operate">
                    <el-button :loading="loadingLog" type="primary" class="form-btn" @click="submitForm(formLogin)">登录
                    </el-button>
                </el-form-item>
            </el-form>
            <el-popover
              placement="top-start"
              title="Title"
              :width="200"
              trigger="hover"
              content="this is content, this is content, this is content"
            >
              <template #reference>
                <el-button >Hover to activate</el-button>
              </template>
            </el-popover>
        </div>
        
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { UserFilled, Lock, InfoFilled } from '@element-plus/icons-vue';
import {mytShaGet,mytTokenPost,ylsgetUserInfo} from 'api/login.js'
import {sha256} from 'js-sha256'
// 导入three.js需要的插件
import * as THREE from "three"
// 导入gltf载入库
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
// 导入解压库
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"
// 导入动画库
import {gsap} from "gsap"
// 导入RGBE
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader"
// 导入轨道控制器
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


// import { ElMessage } from 'element-plus'
// import { useRouter } from 'vue-router';

const router=useRouter()
const store = useStore();
const ref_form = ref();
const rulesForm = reactive({
  login_id: [{ required: true, message: '请输入用户名', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }]
});
const loadingLog = ref(false);
const formLogin = reactive({
  login_id: '',
  password: ''
});
const submitForm=async formEl=>{
    if (!formEl) return;
    try{
        // 加密方式
        // loadingLog.value=true
        // const issha =await mytShaGet({login_id:formEl.login_id})
        // if(issha.encryption=='sha256'){
        //     formLogin.password=sha256(formLogin.password)
        // }
        // // 获取token
        // const params=Object.assign({},formLogin,{access_key:'N9lboMmOzL'})
        // const istoken=await mytTokenPost(params)
        // // 存储token
        // store.commit('setToken',istoken.access_token)
        // sessionStorage.setItem('Token',istoken.access_token)
        // // 获取用户信息
        // const userInfo=await ylsgetUserInfo()
        // store.commit('setUserInfo',userInfo)
        // sessionStorage.setItem('userInfo', JSON.stringify(userInfo))

        router.push('/home')
        // ElMessage({
        //   message:'登录成功',
        //   type:'success'
        // })
        // loadingLog.value=false
        // console.log(userInfo,456)
        
    }catch(error){
        console.log(error,666)  
    }
}
let screenDom=ref(null)
let pages=ref(null)
// three
onMounted(()=>{
  // 1.创建场景
  const scene=new THREE.Scene();
  // 场景的背景颜色
  const scenecolor=new THREE.Color("rgb(0,0,0)")
  scene.background=scenecolor

  const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  // 设置相机位置
  camera.position.set(0,0,20);
  scene.add(camera)

  // 添加灯光
  // 环境光
  const light1=new THREE.AmbientLight(0xffffff,0.5)
  light1.position.set(1,-1,1)
  scene.add(light1)
  
  // 平行光
  const light2 = new THREE.DirectionalLight( 0xffffff, 1);
  light2.position.set(0,0,2)
  scene.add(light2)
   // 平行光
  const light3 = new THREE.DirectionalLight( 0xffffff, 1);
  light3.position.set(0,0,-2)
  scene.add(light3)


  // 初始化渲染器
  const renderer=new THREE.WebGL1Renderer();
  // 设置渲染尺寸大小
  renderer.setSize(window.innerWidth,window.innerHeight)
  // 将webGL渲染的canvas内容添加到body
  screenDom.value.appendChild(renderer.domElement);
  // 监听屏幕的大小改变，修改渲染器宽高，相机比例
  window.addEventListener("resize",()=>{
      // 更新摄像头
      camera.aspect=window.innerWidth/window.innerHeight;
      // 更新摄像机的矩阵投影
      camera.updateProjectionMatrix();
      // 更新渲染器
      renderer.setSize(window.innerWidth,window.innerHeight);
      // 设置渲染器的像素比
      renderer.setPixelRatio(window.devicePixelRatio);
  })

  // 创建轨道控制器
  const controls=new OrbitControls(camera,renderer.domElement)
  controls.enableDamping=true
  // 创建星空背景
  // let rgbeLoader=new RGBELoader()
  // rgbeLoader.loadAsync('public/hdr/003.hdr').then((texture)=>{
  //    // 映射
  //    texture.mapping=THREE.EquirectangularReflectionMapping;
  //    scene.background=texture
  //   // 环境贴图
  //    scene.environment=texture
  // })
  
  // 设置渲染函数
  function render(){
      // 设置控制器阻尼（拥有惯性）,如果该值被启用，你将必须在你的动画循环里调用.update()。
      // controls.update()
      renderer.render(scene,camera)
      // 浏览器每一帧渲染一下
      requestAnimationFrame(render)
  };
  render();

  // 设置解压缩的加载器
  const dracoLoader=new DRACOLoader()
  dracoLoader.setDecoderPath("draco/")
  // dracoLoader.setDecoderConfig({type:"js"})

  // // 实例化gltf载入库
  const loader=new GLTFLoader()
  loader.setDRACOLoader(dracoLoader)
  //加载模型
  loader.load("public/model/fc3.glb",(gltf)=>{
    gltf.scene.scale.set(0.3,0.3,0.3);
    // 设置位置
    gltf.scene.position.set(-8,0,0)
    gltf.scene.rotation.set(0,0.5,0)
    scene.add(gltf.scene)

    window.addEventListener("mousemove",(e)=>{
      let x=(e.clientX/window.innerWidth)*2-1
      let y=(e.clientY/window.innerHeight)*2-1
      let timeline=gsap.timeline();
      timeline.to(gltf.scene.rotation,{
        duration:0.5,
        x:y,
        y:x,
        duration:1
      })
    })
  })

  // 加载月球模型
  loader.load("public/model/yueqiu.glb",(gltf)=>{
    console.log(gltf)
    let moon = gltf.scene.children[0];
    for(let j=0;j<10;j++){
      let moonInstance=new THREE.InstancedMesh(
        moon.geometry,
        moon.material,
        100
      );
      for(let i=0;i<100;i++){
        let x=Math.random()*1000-500;
        let y=Math.random()*1000-500;
        let z=Math.random()*1000-500;
        let matrix=new THREE.Matrix4();
        // 设置大小
        let size=Math.random()*20-8;
        matrix.makeScale(size,size,size);
        matrix.makeTranslation(x,y,z);
        moonInstance.setMatrixAt(i,matrix);
      }
      gsap.to(moonInstance.position,{
        duration:Math.random()*10+2,
        z:-1000,
        repeat:-1,
        ease:'linear'
      })
      scene.add(moonInstance)
    }
    
  })



})

</script>
<style lang="scss" scoped>
  .login-three{
      width:500px;
      height: 500px;
      // background-color: #1973e3;
  }
.login-main {
    position: absolute;
    right: 8vw;
    top: 50%;
    transform: translateY(-50%);
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .form-title {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        position: relative;

        .ft-txt {
            font-size: 32px;
            font-weight: bold;
            color: #fff;
        }

        .ft-split {
            font-size: 24px;
            margin: 0 8px;
            color: #fff;
        }

        .ft-en {
            font-size: 26px;
            opacity: 0.4;
            font-weight: 200;
            color: #fff;
        }

        .fail-msg {
            display: flex;
            align-items: center;
            justify-content: center;
            color: orange;
            position: absolute;
            top: 100%;
            width: 100%;
            white-space: nowrap;
            padding-top: 4px;
            font-size: 20px;

            .fail-txt {
                margin-left: 6px;
            }
        }
    }

    .login-form-class {
      width: 100%;
      $ht: 65px;
      $ft: 22px;
      ::v-deep(.el-input--large .el-input__inner) {
        height: $ht;
        line-height: $ht;
        font-size: $ft;
      }
      ::v-deep(.el-input__wrapper) {
        border-radius: 8px;
      }
      ::v-deep(.el-input__prefix) {
        width: 73px;
        font-size: 32px;
        color:#1973e3;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: 20px;
          height: 40px;
          width: 1px;
          background: #dbebff;
          transform: translateY(-50%);
        }
      }
      ::v-deep(.el-input--large.el-input--prefix .el-input__inner) {
      }
      ::v-deep(.el-form-item--large) {
        margin-bottom: 35px;
      }
      ::v-deep(.el-form-item__error) {
        font-size: 18px;
      }
      .form-operate {
        padding-top: 32px;
        .form-btn {
          width: 100%;
          height: $ht;
          border-radius: 8px;
          font-size: $ft;
        }
      }
    
    }
}
</style>