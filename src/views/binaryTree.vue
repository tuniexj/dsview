/**
* Created by xiejun on 2019/03/04.
* 二叉树
*/
<template>
  <ds-menu title="二叉树" @tap="onTap" :hasBack="true" :listData="listData"></ds-menu>
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
    this.listData.push({ name: 'create', desc: '建二叉树' })
    this.listData.push({ name: 'show', desc: '凹入显示' })
    this.listData.push({ name: 'preOrder', desc: '先序遍历' })
    this.listData.push({ name: 'inOrder', desc: '中序遍历' })
    this.listData.push({ name: 'postOrder', desc: '后序遍历' })
    this.listData.push({ name: 'levelOrder', desc: '层次遍历' })
    this.listData.push({ name: 'leafNum', desc: '求叶子数' })
    this.listData.push({ name: 'nodeNum', desc: '求结点数' })
    this.listData.push({ name: 'treeDepth', desc: '求树深度' })

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