// 对外暴露一个对象
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  // webpack开启代理解决跨域问题
  // devServer: {
  //   proxy: {
  //     '/kapcb': {
  //       target: 'http://localhost:9096',
  //       pathRewrite: { '^/api': '' }
  //     }
  //   }
  // }
}