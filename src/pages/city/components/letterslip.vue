<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item" @touchstart.prevent="TouchStart" @touchmove="TouchMove" @touchend="TouchEnd" @click="LetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'cityletterslip',
  props: {
    cities: Object
  },
  computed: {
    // 计算字母集合 [A,B,C,D...]
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 获取字母A所在高度（在页面数据渲染完成后获取提高性能）
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    LetterClick (e) {
      // 获取点击的字母，通过主组件传递到 scrolllist 组件
      this.$emit('change', e.target.innerText)
    },
    // 字母集滑动选择
    // 开始
    TouchStart () {
      this.touchStatus = true
    },
    TouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 减少频繁响应
        this.timer = setTimeout(() => {
          // 字母所在位置 = 手指触点高度-顶部其他元素高度（输入框等蓝色区域）
          const touchY = e.touches[0].clientY - 79
          // 第几个字母（每个字母高度20）
          const index = Math.floor((touchY - this.startY) / 20)
          // 手指滑动再字母区域内，传递当前字母
          if (index >= 0 && index < this.letters.length) {
            // 传递当前字母变化对应列表
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    // 结束
    TouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/global.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
