<template>
  <div class="block">
    <swiper>
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-block" v-for="item of page" :key="item.id">
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.iconurl' />
          </div>
          <p class="icon-desc">{{item.name}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'IndexIcons',
  data () {
    return {
      icons: [
        {
          id: 1,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          name: '景点门票'
        },
        {
          id: 2,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          name: '少林寺'
        },
        {
          id: 3,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          name: '水乐园'
        },
        {
          id: 4,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          name: '园博园'
        },
        {
          id: 5,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
          name: '冰雪世界'
        },
        {
          id: 6,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          name: '动物园'
        },
        {
          id: 7,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          name: '实景演出'
        },
        {
          id: 8,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/85/77241e9427222b02.png',
          name: '大山大河'
        },
        {
          id: 9,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          name: '大山大河'
        },
        {
          id: 10,
          iconurl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          name: '实景演出'
        }
      ]
    }
  },
  computed: {
    // 分页
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/global.styl';
  .block >>> .swiper-container
    height 0
    padding-bottom  50%;
  .block
    margin-top .1rem
  .icon-block
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: #000
        ellipsis()
</style>
