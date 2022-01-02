<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">返回首页
          <img src="./images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="search">Search</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    // 点击搜索按钮, 跳转search结果页, 同时请求接口进行搜索
    search () {
      // 跳转搜索页面
      console.log(this.keyword)
      console.log(this.$route.path)
      // 模板字符串
      // this.$router.push(`/search/${this.keyword}`)
      // 对象写法。 对象写法路由跳转时, 可以是name(匿名路由)、path的形式, 但是需要注意path这种写法不能于params参数一起使用
      // 如果路由要求传递params参数, 可以在指定路由的时候在传递参数的key后面添加?代表params参数可传可不传
      // 当传递的参数为空字符串时, 使用undefined解决 : params参数可以传递、不传递或空字符串
      this.$router.push({ name: 'Search', params: { keyword: this.keyword || undefined } }, (success) => {
      }, (error) => {
      })

      // 使用路由组件传递props数据, 有三种写法
      // 1.布尔值写法 : 在配置路由的时候添加属性 props : true

      // 2.对象写法 :

    },
  }
}
</script>

<style scoped lang="less">

.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}

</style>