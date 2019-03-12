/**
* Created by xiejun on 2019/03/04.
* 图
*/
<template>
  <ds-menu title="图" @tap="onTap" :hasBack="true" :listData="listData"></ds-menu>
</template>

<script>
import dsMenu from '@/components/dsMenu'
export default {
  components: { dsMenu },
  name: '',
  data() {
    return {
      listData: []
    }
  },
  props: {},
  computed: {},
  created() {
    this.listData.push({ name: 'push', desc: '更新邻接矩阵' })
    this.listData.push({ name: 'pop', desc: '深度优先遍历' })
    this.listData.push({ name: 'show', desc: '广度优先遍历' })

    this.listDataNames = this.listData.map(data => data.name)
  },
  mounted() {},
  watch: {},
  methods: {
    onTap(name) {
      let index = this.listDataNames.indexOf(name)
      if (index < 0) {
        // 不存在的name
      } else {
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>