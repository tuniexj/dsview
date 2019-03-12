/**
* Created by xiejun on 2019/03/12.
* 返回
*/
<template>
  <div @click="onTap" class="ds-back">返回</div>
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
  methods: {
    onTap() {
      this.$emit('back')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/base/index.less';
.ds-back {
  display: inline-block;
  background: @color-main;
  color: white;
  .fs-btn();
  border-radius: 4px;
  .padding(5px, @padding);
}
</style>