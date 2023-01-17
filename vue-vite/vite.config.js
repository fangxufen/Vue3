import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// elment按需引入
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 导入vue模块插件（无需每个组件导入）=>import {ref,reactive} from 'vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 别名
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
      'public':path.resolve(__dirname, 'public'),
      'components': path.resolve(__dirname, 'src/components'),
      'common': path.resolve(__dirname, 'src/common'),
      'router': path.resolve(__dirname, 'src/router'),
      'store': path.resolve(__dirname, 'src/store'),
      'style': path.resolve(__dirname, 'src/style'),
      'view': path.resolve(__dirname, 'src/view'),
      'api': path.resolve(__dirname, 'src/api'),
      'assets':path.resolve(__dirname, 'src/assets')
    },
    // 省略文件后缀
    extensions:['','.js','.vue','.json','.scss','.css'],
    'vue-i18n':'vue-i18n/dist/vue-i18n.cjs.js'
  },
  server:{
    // 跨域
    proxy:{
      '/api':{
        target:'http://58.59.43.23:8711/proxy/ythsj',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/, '')
      },
      '/orderp':{
        target:'http://rz.ywgb.youlishu.com:8090',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/orderp/, '')
      },
      '/datamUrl':{
        target:'http://rz.ywgb.youlishu.com:8711',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/datamUrl/, '')
      }
    }
    // 端口号
   
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
  // }

  
})