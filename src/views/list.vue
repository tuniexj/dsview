/**
* Created by xiejun on 2019/03/04.
* 列表
*/
<template>
  <ds-menu title="线性表" @tap="onTap" :hasBack="true" :listData="listData"></ds-menu>
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
    this.listData.push({ name: 'create', desc: '建表' })
    this.listData.push({ name: 'insert', desc: '插入' })
    this.listData.push({ name: 'delete', desc: '删除' })
    this.listData.push({ name: 'show', desc: '显示' })
    this.listData.push({ name: 'find', desc: '查找' })
    this.listData.push({ name: 'length', desc: '求表长' })

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