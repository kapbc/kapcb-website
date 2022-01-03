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

// 重写VueRouter原型对象的push方法解决编程式路由跳转连续点击promise错误回调
// 先将VueRouter原型对象上的push方法进行备份, 因为最终使用的还是原型对象上的push方法
let originalVueRouterPush = VueRouter.prototype.push

// 重写push|replace方法
// 第一个参数 : 告诉原来push方法, 需要跳转的location
VueRouter.prototype.push = function (location, resolve, reject) {

  // 如果传递了成功回调函数与失败回调函数
  if (resolve && reject) {
    // call || apply 的区别 :
    // 相同点 : 都可以调用函数一次, 都可以篡改函数的上下文一次
    // 不同点 : call与apply传递参数的方式不同, call传递多个参数使用','隔开, 而apply传递多个参数使用数组
    // this为当前调用push方法的vue组件实例
    originalVueRouterPush.call(this, location, resolve, reject)
  } else {
    // 如果没有传递成功和失败回调给promise, 则手动传递两个, 消除警告
    originalVueRouterPush.call(this, location,
      () => {
      },
      () => {
      })
  }

}


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



