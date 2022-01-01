<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
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
  }
}
</script>

<style>

</style>
