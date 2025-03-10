import axios from 'axios'

export default function axiosDemo() {
  axios.defaults.baseURL = 'http:httpbin.prg'
  // function fn1(config: { url: string }) {
  //   // 请求发送成功会执行的函数
  //   // loading动画
  //   // 请求增加token
  //   config.url = '/post'
  //   return config
  // }
  // function fn2(err: any) {
  //    // 请求发送失败会执行的函数
  //   console.log('=====================================')
  //   console.log('请求发生错误')
  //   console.log('=====================================')
  //   return err
  // }

  // function fnresponse1(response: any) {
  //   // 响应成功的拦截
  //   console.log('=====================================');
  //   console.log('服务器响应成功拦截');
  //   console.log('=====================================');
  //   return response
  // }
  // function fnresponse2(err: any) {
  //   console.log('=====================================');
  //   console.log('服务器响应失败');
  //   console.log('=====================================');
  //   return err
  // }
  // axios.interceptors.request.use(fn1, fn2)

  // axios.interceptors.response.use(fnresponse1, fnresponse2)
  axios
    .get('/get', {
      params: {
        name: 'axios',
        age: 18
      }
    })
    .then((data) => {
      // console.log('=====================================')
      // console.log(data)
      // console.log('=====================================')
    })
  console.log('axiosDemo')
}
