import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './vuexstore/index'
// 全局引用element-plus 不在乎打包体积
// import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import globalRegister from './global/index'
// import hRequest from './service/index'
import 'normalize.css'
import './assets/style/index.less'

import App from './App.vue'
import router from './router'

import { setupStore } from './vuexstore'

const app = createApp(App)

app.use(createPinia())
app.use(store)
setupStore()
app.use(router)
globalRegister(app)

// 全局引用element-plus 不在乎打包体积
// app.use(ElementPlus)
// axiosDemo()
// const publicPath = import.meta.env.VITE_PUBLIC_PATH || './'

// hRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {}
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     headers: {},
//     showLoading: false,
//     interceptors: {
//       requestInterceptors: (config) => {
//         console.log('单独请求的config 实例')
//         return config
//       },
//       requestInterceptorsCatch: (err) => {
//         console.log('请求失败的拦截 实例')
//         return err
//       },
//       responseInterceptors: (res) => {
//         console.log('响应成功的拦截 实例')
//         return res
//       },
//       responseInterceptorsCatch: (err) => {
//         console.log('响应失败的拦截 实例')
//         return err
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res, '111111111')
//   })

// hRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     headers: {},
//     showLoading: false
//   })
//   .then((res) => {
//     // console.log(res, '2222222222')
//   })
//   .catch((err) => {
//     // console.log(err, '3333333333')
//   })

app.mount('#app')
