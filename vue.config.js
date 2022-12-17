const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  outputDir: path.resolve(__dirname,'../dist'),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/customwooddesigns/'
    : '/',
  devServer:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000'
      }
    }
  }

}
