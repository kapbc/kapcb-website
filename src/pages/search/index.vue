<template>
  <div>
    我是搜索页
    <h1>搜索关键字为 : {{ this.$route.params.keyword }}</h1>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style scoped>

</style>