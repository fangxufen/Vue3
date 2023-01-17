<template>
  <div>
      <!-- <HelloWorld @myclick="myclick"/> -->
      <Suspense>
        <template #default>
          <!-- elment ui 设置中文 -->
          <el-config-provider :locale="locale">
            <router-view></router-view>
          </el-config-provider>
          
        </template>      
        <template #fallbcak>
          Loading...
        </template>
      </Suspense>
            
      <!-- <router-view></router-view> -->
  </div>
</template>

<script setup>
// 全局设置中文
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// 直接导入组件
import { ref,reactive} from 'vue';

const myclick=()=>{
  console.log('点击向外传')
}

const locale=ref('')
locale.value=zhCn
</script>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.button{
  width: 1rem;
  height: 1rem;
  background-color: aquamarine;
}
</style>
