<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import '~@/styles/base/index.less';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-txt;
}
</style>
