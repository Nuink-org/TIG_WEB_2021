module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TIG_2021/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variable.scss";
          @import "@/assets/styles/_mixins.scss";
          @import "@/assets/styles/app.scss";
        `
      }
    }
  }
}