<template>
  <div>
    我是搜索页
    <h1>搜索关键字为 : {{ this.$route.params.keyword }}</h1>
    <h1>使用路由组件传递props数据 : {{ searchKeyword }}</h1>
    <h1>获取路由组件props对象写法中的 : {{ searchDescription }}</h1>
  </div>
</template>

<script>

export default {
  name: 'index',

  data () {
    return {
      searchKeyword: this.$props.keyword,
      searchDescription: this.$props.description
    }
  },

  props:
      {
        keyword: {
          type: String,
          required: false,
          default: ''
        },
        description: {
          type: String,
          required: false,
          default: ''
        }
      },
}

</script>

<style scoped>

</style>