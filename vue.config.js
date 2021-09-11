module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TIG_WEB_2021/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variable.scss";
        `
      }
    }
  }
}