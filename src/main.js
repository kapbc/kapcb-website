import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/pages/router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  // 当在这里注册 router 之后, 所有的组件(路由组件&非路由组件)中都拥有@route & $router属性
  // $route(route -> 路由) : 一般是获取路由信息, 如获取路径、params、path等等
  // $router(router -> 路由器) : 一般是进行编程式导航, 如进行路由跳转如push | replace
  router
}).$mount('#app')
