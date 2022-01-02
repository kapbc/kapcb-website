// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用 vue-router 插件
Vue.use(VueRouter)

// 引入路由组件
const home = () => import('@/pages/home/index')
const login = () => import('@/pages/login/index')
const register = () => import('@/pages/register/index')
const search = () => import('@/pages/search/index')

// 配置路由
// 全局暴露 VueRouter 组件
export default new VueRouter({
  // 配置路由
  routes: [
    {
      name: 'Home',
      path: '/',
      redirect: '/home',
      // 在 meta 中配置当前路由所代表的页面是否需要显示footer
      meta: {
        showFooter: true
      }
    },
    {
      name: 'Home',
      path: '/home',
      component: home,
      meta: {
        showFooter: true
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: login,
      meta: {
        showFooter: false
      }
    },
    {
      name: 'Register',
      path: '/register',
      component: register,
      meta: {
        showFooter: false
      }
    },
    {
      name: 'Search',
      path: '/search/:keyword',
      component: search,
      meta: {
        showFooter: true
      }
    }
  ]
})



