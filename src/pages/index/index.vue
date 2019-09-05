<template>
  <!-- 组件使用 -->
  <div>
    <index-header v-bind:city="city"></index-header>
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
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      city: ''
    }
  },
  // 注册组件
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexSell,
    IndexWeek
  },
  mounted () {
    this.getIndexdata()
  },
  methods: {
    getIndexdata () {
      axios.get('/api/index.json').then(res => {
        let data = res.data.data
        this.city = data.city
      })
    }
  }
}
</script>

<style scoped>

</style>
