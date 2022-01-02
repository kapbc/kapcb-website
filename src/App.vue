<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 登录页和注册页需要隐藏底部footer -->
    <Footer v-show="showFooter"></Footer>
  </div>
</template>

<script>
const Header = () => import('@/components/header/index.vue')
const Footer = () => import('@/components/footer/index')

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    // 登录页面和注册页面不显示footer, 这种也发相当于hardCode, 当有很多这种footer需要不显示的
    // 情况的时候, 这样写就比较难受, 可以在注册路由的时候在meta属性中配置是否显示footer
    // showFooter () {
    //   return !(this.$route.path === '/login' || this.$route.path === '/register')
    // }

    showFooter () {
      return this.$route.meta.showFooter
    }

  },
}
</script>

<style>

</style>
