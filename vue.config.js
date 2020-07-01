const path = require('path');
function resolve(dir) {
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
  },
  devServer: {
    proxy: {
      "/api": {
        "target": "http://localhost:3000",
        "changeOrigin": true,
        "pathRewrite": {
          "^/": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        axios: resolve("node_modules/axios")
      }
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerMode: "static"
    }
  }
}