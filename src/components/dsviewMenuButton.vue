/**
* Created by xiejun on 2019/03/14.
* dsview menu button
*/
<template>
  <div class="ds-dsview-menu-button">
    <slot/>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="less" scoped>
@import '~@/styles/base/index.less';
.ds-dsview-menu-button {
  display: inline-block;
  padding: 5px;
  background: @color-btn;
  border-radius: 4px;
  cursor: pointer;

  .fs-btn();
}
</style>