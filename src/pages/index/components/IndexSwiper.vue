<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="hasimgs">
      <!-- slides -->
      <swiper-slide v-for="item of imgs" :key="item.id">
        <img class="swiper-img" :src="item.imgurl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'IndexSwiper',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 循环自动切换
        loop: true,
        // 切换速度
        speed: 1000,
        // 自动切换速度
        autoplay: 1000,
        // 用户操作swiper之后，是否禁止autoplay
        autoplayDisableOnInteraction: false,
        // Slides的滑动方向 vertical， 默认 horizontal
        // direction: 'vertical',
        // 切换效果
        effect: 'fade'
      }
    }
  },
  computed: {
    hasimgs () {
      return this.imgs.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl';
/* 突破局部样式限制，使得所有 swiper 下样式都生效 */
.swiper >>> .swiper-pagination-bullet-active {
    background: #fff;
}
.swiper
  width : 100%
  height : 0
  padding-bottom : 26.7%
  overflow : hidden
  background : #eee
  .swiper-img
    width : 100%
</style>
