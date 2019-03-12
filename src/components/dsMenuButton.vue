/**
* Created by xiejun on 2019/03/12.
* ds button
*/
<template>
  <div class="ds-button">
    <slot/>
  </div>
</template>

<script>
export default {
  components: {},
  name: '',
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
.ds-button {
  background: @color-btn;
  margin-left: @padding;
  height: 40px;
  line-height: 40px;
  .padding-h(10px);
  .fs-btn();
}
</style>