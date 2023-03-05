import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import 'normalize.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app= createApp(App)
app.use(router).use(store).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}