// api统一管理
import axios from './request'

// 发送请求 : axios发送请求返回的是Promise对象
export const category = () => axios({
  url: '/home-category',
  method: 'get'
})
