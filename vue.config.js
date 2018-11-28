/* ---------------------------------解决跨域请求数据---------------------------- */
module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  }
}