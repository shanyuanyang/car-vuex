module.exports = {
  devServer: {
    port: 8888, // 端口号，如果端口号被占用，会自动提升1
    host: "localhost", //主机名， 127.0.0.1， 真机 0.0.0.0
    https: false, //协议
    open: true,

  },
  lintOnSave: false,  //关闭格式检查
  productionSourceMap: false, //不生成.map文件，加快打包速度
}
