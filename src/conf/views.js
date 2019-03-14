const home = {
  menus: [
    { name: 'list', desc: '线性表' },
    { name: 'stack', desc: '栈' },
    { name: 'queue', desc: '队列' },
    { name: 'binaryTree', desc: '二叉树' },
    { name: 'map', desc: '图' }
  ]
}
const level = {
  list: {
    title: '线性表',
    menus: [
      { name: 'create', desc: '建表' },
      { name: 'insert', desc: '插入' },
      { name: 'delete', desc: '删除' },
      { name: 'show', desc: '显示' },
      { name: 'find', desc: '查找' },
      { name: 'length', desc: '求表长' }
    ]
  },
  stack: {
    title: '栈',
    menus: [
      { name: 'push', desc: '进栈' },
      { name: 'pop', desc: '出栈' },
      { name: 'show', desc: '显示' },
      { name: 'conversion', desc: '数制转换' }
    ]
  },
  queue: {
    title: '队列',
    menus: [
      { name: 'in', desc: '进队' },
      { name: 'out', desc: '出队' },
      { name: 'readFront', desc: '读队头元素' },
      { name: 'show', desc: '显示' },
      { name: 'doubleQueue', desc: '双队列' }
    ]
  },
  binaryTree: {
    title: '二叉树',
    menus: [
      { name: 'create', desc: '建二叉树' },
      { name: 'show', desc: '凹入显示' },
      { name: 'preOrder', desc: '先序遍历' },
      { name: 'inOrder', desc: '中序遍历' },
      { name: 'postOrder', desc: '后序遍历' },
      { name: 'levelOrder', desc: '层次遍历' },
      { name: 'leafNum', desc: '求叶子数' },
      { name: 'nodeNum', desc: '求结点数' },
      { name: 'treeDepth', desc: '求树深度' }
    ]
  },
  map: {
    title: '图',
    menus: [
      { name: 'push', desc: '更新邻接矩阵' },
      { name: 'pop', desc: '深度优先遍历' },
      { name: 'show', desc: '广度优先遍历' }
    ]
  }
}
export default { home, level }
