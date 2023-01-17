

<template>
  <Suspense>
        <!-- <template #default>

          <el-config-provider :locale="locale"> -->
            <router-view></router-view>
          <!-- </el-config-provider>
          
        </template>      
        <template #fallbcak>
          Loading...
        </template> -->
  </Suspense>
 
</template>
<script setup>
  

  
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
</style>
