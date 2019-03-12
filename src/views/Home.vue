/**
* Created by xiejun on 2019/03/04.
* home
*/
<template>
  <ds-menu title="数据结构演示" @tap="onTap" @afterLeave="onAfterLeave" :listData="listData"></ds-menu>
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
    this.listData.push({ name: 'list', desc: '线性表' })
    this.listData.push({ name: 'stack', desc: '栈' })
    this.listData.push({ name: 'queue', desc: '队列' })
    this.listData.push({ name: 'binaryTree', desc: '二叉树' })
    this.listData.push({ name: 'map', desc: '图' })

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
        this.listData = []
        this.path = `/${name}`
      }
    },
    onAfterLeave() {
      this.$router.push({ path: this.path })
    }
  }
}
</script>

<style lang="less" scoped>
</style>