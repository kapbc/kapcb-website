import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/pages/router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
