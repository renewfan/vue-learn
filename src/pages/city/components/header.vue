<template>
  <div class="header">城市选择<router-link to="/"><div class="iconfont header-back">&#xe624;</div></router-link></div>
</template>

<script>
export default {
  name: 'cityheader',
  data () {
    return {
      msg: 'Welcome to cityheader'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/global.styl';
  .header
    overflow hidden
    position relative
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    background $bgcolor
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #ffffff
</style>
