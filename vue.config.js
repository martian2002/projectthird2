const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production'
}

module.exports = {
  lintOnSave: false,
  publicPath: "",
  productionSourceMap: false,
  assetsDir: "assets",
}

