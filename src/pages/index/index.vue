<template>
  <!-- 组件使用 -->
  <div>
    <index-header></index-header>
    <index-swiper></index-swiper>
    <index-icons></index-icons>
    <index-sell></index-sell>
    <index-week></index-week>
  </div>
</template>

<script>
// 引入组件
import IndexHeader from './components/IndexHeader'
import IndexSwiper from './components/IndexSwiper'
import IndexIcons from './components/IndexIcons'
import IndexSell from './components/IndexSell'
import IndexWeek from './components/IndexWeek'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Index'
    }
  },
  // 注册组件
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexSell,
    IndexWeek
  }
}
</script>

<style scoped>

</style>
