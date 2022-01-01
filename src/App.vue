<template>
  <div id="app">
    <Header></Header>
    我是跟组件
  </div>
</template>

<script>
const Header = () => import('@/components/header/index.vue')

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
