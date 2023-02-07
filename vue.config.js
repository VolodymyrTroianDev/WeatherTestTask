const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'/WeatherTestTask/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'uk',
      localeDir: 'scr',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
})
