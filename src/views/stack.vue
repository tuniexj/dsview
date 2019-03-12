/**
* Created by xiejun on 2019/03/04.
* 栈
*/
<template>
  <ds-menu title="栈" @tap="onTap" :hasBack="true" :listData="listData"></ds-menu>
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
    this.listData.push({ name: 'push', desc: '进栈' })
    this.listData.push({ name: 'pop', desc: '出栈' })
    this.listData.push({ name: 'show', desc: '显示' })
    this.listData.push({ name: 'conversion', desc: '数制转换' })

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