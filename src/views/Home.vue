/**
* Created by xiejun on 2019/03/04.
* home
*/
<template>
  <div class="home">
    <h2>数据结构演示</h2>
    <div class="btn-list">
      <ds-button>线性表</ds-button>
      <ds-button>栈</ds-button>
      <ds-button>队列</ds-button>
      <ds-button>二叉树</ds-button>
      <ds-button>图</ds-button>
    </div>
  </div>
</template>

<script>
import dsButton from '@/components/dsButton'
export default {
  components: { dsButton },
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
.home {
  text-align: left;
  & h2 {
    .padding();
    .fs-title();
    .fs-bigger();
  }
  .btn-list {
    .ds-button:nth-child(even) {
      background-color: white;
    }
  }
}
</style>