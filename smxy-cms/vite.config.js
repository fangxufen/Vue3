import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 别名
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
      'public':path.resolve(__dirname, 'public'),
      'components': path.resolve(__dirname, 'src/components'),
      'router': path.resolve(__dirname, 'src/router'),
      'store': path.resolve(__dirname, 'src/store'),
      'view': path.resolve(__dirname, 'src/view'),
      'api': path.resolve(__dirname, 'src/api'),
      'assets':path.resolve(__dirname, 'src/assets')
    },
    // 省略文件后缀
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: true })]
    }),
    // elment
    Components({
      resolvers: [ElementPlusResolver({ importStyle: true })]
    }),
    
    AutoImport({
      imports:['vue','vue-router']//自动导入vue和vue-router相关函数
    })
  ],
})
