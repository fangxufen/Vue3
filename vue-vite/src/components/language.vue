<template>
    <div>
        中英文切换测试
        <div>
            {{$t('message.Home')}}
        </div>
        <el-button @click="changeLanguage('china')">中文</el-button>
        <el-button @click="changeLanguage('english')">english</el-button>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

// const langName=ref('')

// const state = reactive({
//   curLanguage: 'zh',
// })

const changeLanguage = (item) => {
    if(item=='china'){
        locale.value = 'zh'
        sessionStorage.setItem('lang', "zh")
    }else{
        locale.value = 'en'
        sessionStorage.setItem('lang', "en")
    }
    
}



</script>
<style lang="scss" scoped>

</style>
