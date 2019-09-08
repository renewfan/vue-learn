<template>
  <div class="block">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="slide" v-for="(page, index) of pages" :key="index">
        <div class="icon-block" v-for="item of page" :key="item.id">
          <img class='icon-img-content' :src='item.iconurl' />
          <p class="icon-desc">{{item.name}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'IndexIcons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
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
    height 100%
    padding-bottom  .6rem;
  .block
    margin-top .1rem
  .icon-block
    display flex
    flex-direction column
    justify-content center
    align-items center
    overflow: hidden
    float: left
    width: 25%
    .icon-img-content
      display: block
      margin: 0 auto
      height: 60%
      width 60%
    .icon-desc
      height: .44rem
      line-height: .44rem
      text-align: center
      color: #000
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
