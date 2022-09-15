const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    themeColor: '#8144E1',
    manifestOptions: {
      background_color: '#DF1818'
    }
  }
})
