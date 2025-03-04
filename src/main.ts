import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './vuexstore/index'
// 全局引用element-plus 不在乎打包体积
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import globalRegister from './global/index'
import axiosDemo from './service/axios_demo'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)
globalRegister(app)
// 全局引用element-plus 不在乎打包体积
// app.use(ElementPlus)
axiosDemo()
const publicPath = import.meta.env.VITE_PUBLIC_PATH || './'
console.log('=====================================')
console.log(publicPath)
console.log('=====================================')
app.mount('#app')
