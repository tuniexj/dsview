/**
* Created by xiejun on 2019/03/14.
* ds view
*/
<template>
  <div class="dsview">
    <div class="tip">ds view - {{ title }}<span>{{ version }}</span></div>
    <dsview-menu :menus="menus"></dsview-menu>
  </div>
</template>

<script>
import dsviewMenu from '@/components/dsviewMenu'
import { version } from '@/conf/version'
import views from '@/conf/views'
export default {
  name: '',
  components: { dsviewMenu },
  data() {
    return {
      version: '当前版本：' + version,
      title: '',
      menus: []
    }
  },
  props: {},
  computed: {},
  created() {
    this.initData()
  },
  mounted() {},
  watch: {},
  methods: {
    initData() {
      let { level, action } = this.$route.query
      let levelData = views.level[level]
      this.title = levelData.title
      this.menus = [...levelData.menus]
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/base/index.less';
.dsview {
  .tip {
    .padding-h(@padding);
    .padding-v(5px);
    .fs-tip();
    background: black;
    color: white;
    & span {
      float: right;
      color: @color-txt-2;
    }
  }
}
</style>
