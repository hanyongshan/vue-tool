const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  // 应用部署的基本路径
  publicPath: '/',
  // 构建时的输出目录
  outputDir: 'dist',
  // 放置静态资源的目录
  assetsDir: 'assets',
  // html的输出路径
  indexPath: 'index.html',
  // 文件名哈希
  filenameHashing: true,
  // 开发环境配置
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 9070,
    https: false,
  },
  configureWebpack: {
    externals: {
      // 如果是库模式，可能需要将 vue-virtual-scroller 外部化
      'vue-virtual-scroller': 'vue-virtual-scroller',
    },
    plugins: [new NodePolyfillPlugin()],
  },
});
