<template>
    <div class="home-head">
        <div class="home-head-title">{{$t('message.System')}}</div>
        <div></div>
        <div class="home-head-right">
            <div class="head-right-img" >
                <img v-if="langindex==0" src="/src/assets/image/zhbg.png" @click="changelang('china')"/>
                <img v-if="langindex==1" src="/src/assets/image/enbg.png" @click="changelang('english')"/>
            </div>

            <div class="head-right-user">
                <img src="/src/assets/image/head2.jpg" alt="">
                <el-dropdown>
                    <span class="el-dropdown-link">
                    {{userInfo.name}}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :icon="Plus" @click="btnlogout">{{$t('message.Logout')}}</el-dropdown-item>
                            <el-dropdown-item :icon="CirclePlusFilled">{{$t('message.PersonalCenter')}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script setup>
import {
  ArrowDown,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const router = useRouter()
const store=useStore()

const langindex=ref(0)
const changelang=(item)=>{
     if(item=='china'){
        langindex.value=1
        locale.value = 'en'
        sessionStorage.setItem('lang', "en")
    }else{
        langindex.value=0
        locale.value = 'zh'
        sessionStorage.setItem('lang', "zh")
    }
}


const userInfo=computed(()=>store.state.home.userinfo)
console.log(userInfo)
// username.value=userInfo.name


// 退出登录
const btnlogout=()=>{
        // sessionStorage.setItem('Token',istoken.access_token)
    sessionStorage.removeItem('Token')
    router.push('/login')
}


// console.log(userInfo,777)
// console.log(JSON.parse(sessionStorage.getItem('userInfo')),789)

</script>
<style lang="scss" scoped>
    .home-head{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .home-head-title{
            font-size: 18px;
            font-weight: 600;
        }
        .home-head-right{
            display: flex;
            align-items: center;
            // justify-content: space-around;
            width: 250px;

            .head-right-img{
                margin: 0 20px;
                img{
                    width: 30px;
                    height: 30px;
                }
            }
            .head-right-user{
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                .el-dropdown-link{
                    font-size: 14px;
                }
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    margin-right: 5px;
                }
                span{
                    font-size: 12px;
                }
            }
            
            
        }
    }
</style>
