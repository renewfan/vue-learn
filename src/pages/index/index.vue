<template>
  <!-- <h1>{{msg}}</h1> -->
  <!-- 组件使用 -->
  <div>
    <index-header></index-header>
    <index-swiper></index-swiper>
    <index-icons></index-icons>
  </div>
</template>

<script>
// 引入组件
import IndexHeader from './components/IndexHeader'
import IndexSwiper from './components/IndexSwiper'
import IndexIcons from './components/IndexIcons'
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
    IndexIcons
  }
}
</script>

<style scoped>

</style>
