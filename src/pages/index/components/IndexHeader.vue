<template>
  <div class="header">
    <div class="header-l">
      <div class="iconfont backicon">&#xe624;</div>
    </div>
    <div class="header-c">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-r">
        {{nowcity}}
        <span class="iconfont city-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
  <!-- 1rem=html font-size = 50px (reset.css 中进行了设置 font-size = 50px) -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexHeader',
  computed: {
    // ...mapState(['city'])
    ...mapState({
      nowcity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/global.styl';
  .header
    display:flex
    line-height :.86rem
    color : #fff
    background : $bgcolor
    .header-l
      width : .64rem
      float : left
      .backicon
        text-align : center
        font-size : .4rem
    .header-c
      flex : 1
      height : .64rem
      line-height : .64rem
      color : #cccccc
      margin : .12rem 0 0 .2rem
      padding-left : .2rem
      background : #ffffff
      border-radius : .1rem
      text-align : left
    .header-r
      min-width :1.04rem
      padding 0 .1rem
      float : right
      text-align : center
      flex-wrap wrap
      color #ffffff
      .city-icon
        margin-left : -.04rem
        font-size : .24rem
</style>
