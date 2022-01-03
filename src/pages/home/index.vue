<template>
  <div>
    我是首页
    <!-- 三级联动全局组件 categoryNav, 已经在main.js中进行全局注册, 不需要在使用import导入 -->
    <categoryNav></categoryNav>

    <container></container>

    <recommend></recommend>

    <rank></rank>
  </div>
</template>

<script>
const container = () => import('@/pages/home/container/index')
const recommend = () => import('@/pages/home/recommend/index')
const rank = () => import('@/pages/home/rank/index')

export default {
  name: 'home',
  components: {
    container,
    recommend,
    rank
  }
}

</script>

<style scoped>

</style>