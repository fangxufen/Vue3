import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
// 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
//这里是设计稿宽度 自己修改
  viewportWidth: 750,
  viewportUnit: 'vw'
})

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
    extensions:['','.js','.vue','.json','.scss','.css'],
  },
  server:{
    // 跨域
    proxy:{
      '/api':{
        target:'http://wx.4399udc.com',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/, '')
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
    })
  ],
  css:{
    postcss: {
      plugins: [loder_pxtovw]
    }
  }
})
