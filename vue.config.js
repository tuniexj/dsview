module.exports = {
  parallel: false,
  css: {
    loaderOptions: {
      less: {
        data: '@import "@"'
      }
    },
    modules: true
  }
}