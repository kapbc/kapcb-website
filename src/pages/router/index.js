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
      path: '/search/:keyword?',
      component: search,
      meta: {
        showFooter: true
      },
      // 配置路由组件可以传递props数据, 但是路由传递参数的类型必须是params参数
      // 布尔值写法 : params
      // props: true

      // 对象写法 : 额外的给路由组件传递一些 props
      // props: {
      //   keyword: 'kapcb nb',
      //   description: 'by order of awesome mike'
      // }

      // 函数写法 : 可以params参数、query参数、通过props传递给路由组件, 函数中会将路由参数进行注入
      props: ($route) => {
        return {
          keyword: $route.params.keyword,
          description: 'by order of awesome mike'
        }
      }
    }
  ]
})



