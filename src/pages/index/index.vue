<template>
  <!-- 组件使用 -->
  <div>
    <index-header v-bind:city="city"></index-header>
    <index-swiper :imgs="Swiperimgs"></index-swiper>
    <index-icons :icons="icons"></index-icons>
    <index-sell :selllist="SellList"></index-sell>
    <index-week :WeekList="WeekList"></index-week>
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
      city: '',
      Swiperimgs: [],
      icons: [],
      SellList: [],
      WeekList: []
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
        this.Swiperimgs = data.Swiperimgs
        this.icons = data.icons
        this.SellList = data.SellList
        this.WeekList = data.WeekList
      })
    }
  }
}
</script>

<style scoped>
</style>
