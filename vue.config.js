var ZipPlugin = require('zip-webpack-plugin')
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  configureWebpack: {
    plugins: [new ZipPlugin({
      pathPrefix: '', // 打包到对应目录（一般为当前目录'./'）
      filename: 'hep5package', // 打包生成的文件名
      extension: 'hep5'
    })]
  }
}