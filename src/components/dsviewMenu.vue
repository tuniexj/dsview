/**
* Created by xiejun on 2019/03/14.
* dsview menu
*/
<template>
  <div class="ds-dsview-menu">
    <ds-back @back="onBack"></ds-back>
    <dsview-menu-button v-for="(menu, index) in menus" :data-name="menu.name" :key="index">
      {{ menu.desc }}
    </dsview-menu-button>
  </div>
</template>

<script>
import dsviewMenuButton from './dsviewMenuButton'
import dsBack from '@/components/dsBack'
export default {
  name: '',
  components: { dsviewMenuButton, dsBack },
  data() {
    return {}
  },
  props: {
    menus: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/base/index.less';
.ds-dsview-menu {
  position: relative;
  .border-1px-bottom();
  padding: 5px @padding 0;
  .ds-dsview-menu-button {
    margin-left: 5px;
    margin-bottom: 5px;
  }
}
</style>