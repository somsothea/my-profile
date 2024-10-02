const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //proxy: 'https://api.tfdevs.com'
    //proxy: 'http://172.23.129.202'
  }
})
