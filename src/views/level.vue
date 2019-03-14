/**
* Created by xiejun on 2019/03/14.
* 
*/
<template>
  <ds-menu :title="title" @tap="onTap" @afterLeave="onAfterLeave" :hasBack="true" :listData="listData"></ds-menu>
</template>

<script>
import dsMenu from '@/components/dsMenu'
import views from '@/conf/views'
export default {
  name: '',
  components: { dsMenu },
  data() {
    return {
      title: '',
      listData: []
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
      let name = this.$route.params.name
      let data = views.level[name]
      data.name = name

      this.title = data.title
      this.listData = [...data.menus]
      this.levelData = data
    },
    onTap(name) {
      this.listData = []
      this.query = {
        level: this.levelData.name,
        action: name
      }
    },
    onAfterLeave() {
      this.$router.push({ path: '/dsview', query: this.query })
    }
  }
}
</script>

<style lang="less" scoped>
</style>