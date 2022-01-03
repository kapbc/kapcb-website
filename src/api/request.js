// 对axios进行二次封装
import Axios from 'axios'

// 利用axios的call方法创建一个axios实例
let axiosInstance = Axios.create({
  // 配置对象, 可以进行请求配置
  // 请求基础路径
  baseURL: '/kapcb',
  // 代表请求超时事件
  timeout: 5000
})

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
  // config : 为配置对象, 对象里面有一个属性很重要, headers请求头
  return config
})

// 响应拦截器
axiosInstance.interceptors.response.use(
  // 成功的回调
  (result) => {
    return result
  },
  // 失败的回调
  (error) => {
    // 终结Promise链
    return Promise.reject(new Error('fail'))
  })

