import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import * as echarts from 'echarts'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import I18n from "./lang/index";
// import * as Loading from 'element-plus'


// import element from 'element-plus'
// import 'element-plus/dist/index.css'
// createApp为vue.js中的方法，创建app实例

// Object.keys(ElIconModules).forEach((key) => {
//     app.component(key, ElIconModules[key]);
// });
// 

const app= createApp(App)

app.use(router).use(store).use(I18n).mount('#app')
// app.use(Loading.directive)
app.config.globalProperties.$echarts=echarts//全局挂载echarts

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}