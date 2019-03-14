/**
* Created by xiejun on 2019/03/04.
* home
*/
<template>
  <ds-menu title="数据结构演示" @tap="onTap" @afterLeave="onAfterLeave" :listData="listData"></ds-menu>
</template>

<script>
import dsMenu from '@/components/dsMenu'

import views from '@/conf/views'
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
    this.listData = views.home.menus
  },
  mounted() {},
  watch: {},
  methods: {
    onTap(name) {
      this.listData = []
      this.path = `/home/${name}`
    },
    onAfterLeave() {
      this.$router.push({ path: this.path })
    }
  }
}
</script>

<style lang="less" scoped>
</style>