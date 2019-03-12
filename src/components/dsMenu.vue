/**
* Created by xiejun on 2019/03/12.
* 目录
*/
<template>
  <div class="ds-menu">
    <h2>
      <span>{{ title }}</span>
      <ds-back v-if="backVisible" @back="onBack"></ds-back> 
    </h2>
    <div @click="onTap" class="btn-list">
      <transition-group
      name="staggered-fade"
      tag="div"
      @beforeEnter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      @afterLeave="onAfterLeave"
      :css="false">
        <ds-menu-button v-for="(data, index) in showList" :key="data.name" :data-name="data.name" :data-index="index">
          {{ data.desc }}
        </ds-menu-button>
      </transition-group>
    </div>
    <slot/>
  </div>
</template>

<script>
import dsBack from '@/components/dsBack'
import dsMenuButton from '@/components/dsMenuButton'

import Velocity from 'velocity-animate'
export default {
  name: '',
  components: { dsBack, dsMenuButton },
  data() {
    return {
      showList: [],
      showBack: true
    }
  },
  props: {
    hasBack: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  computed: {
    backVisible() {
      return this.showBack && this.hasBack
    }
  },
  created() {
    this.listNum = this.listData.length
    setTimeout(() => {
      this.showList = this.listData
    }, 10)
  },
  mounted() {},
  watch: {
    listData() {
      this.showList = this.listData
    }
  },
  methods: {
    onBack() {
      this.showList = []
      this.showBack = false
    },
    onTap(event) {
      let target = event.target
      let name = target.dataset.name
      this.$emit('tap', name)
    },
    onBeforeEnter(el) {
      el.style.opacity = 0
      // el.style.height = 0
      el.style.width = 0
    },
    onEnter(el, done) {
      let delay = el.dataset.index * 40
      setTimeout(() => {
        Velocity(el, { opacity: 1, height: '40px', width: '100%' }, { complete: done })
      }, delay)
    },
    onLeave(el, done) {
      let delay = (this.listNum - el.dataset.index) * 60
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 0, width: 0 },
          {
            complete: () => {
              Velocity(el, { height: 0 }, { complete: done })
            }
          }
        )
      }, delay)
    },
    onAfterLeave() {
      if (!this.afterLeaveNum) {
        this.afterLeaveNum = 0
      }
      this.afterLeaveNum = this.afterLeaveNum + 1
      if (this.afterLeaveNum >= this.listNum) {
        if (this.showBack) {
          this.$emit('afterLeave')
        } else {
          this.$router.back()
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/base/index.less';
.ds-menu {
  & h2 {
    height: 48px;
    .padding-h();
    .fs-title();
    .fs-bigger();
    .flex-hor-ver-center();
    & span {
      .flex-n();
    }
  }
  .btn-list {
    position: relative;
    border-top: 1px solid @color-border;
    border-bottom: 1px solid @color-border;
  }
}
</style>