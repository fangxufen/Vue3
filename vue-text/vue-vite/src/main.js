import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// import 'lib-flexible/flexible'
import 'normalize.css'

const app= createApp(App)

app.use(router).mount('#app')
