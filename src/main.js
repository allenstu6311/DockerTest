import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from "./router"
import 'element-plus/es/components/message/style/css'

const app = createApp(App)

app.use(VueRouter)
app.mount('#app')
