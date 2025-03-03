import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './vuexstore/index'
// 全局引用element-plus 不在乎打包体积
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import registerApp from './global/index'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)
registerApp(app)
// 全局引用element-plus 不在乎打包体积
// app.use(ElementPlus)

app.mount('#app')
