<template>
  <!-- 组件使用 -->
  <div>
    <index-header></index-header>
    <index-swiper v-bind:imgs="Swiperimgs"></index-swiper>
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
import { mapState } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      lastcity: '',
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
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    // 第一次进入页面调用，类似小程序 onLoad
    this.lastcity = this.city
    this.getIndexdata()
  },
  methods: {
    getIndexdata () {
      axios.get('/api/index.json?city=' + this.city).then(res => {
        let data = res.data.data
        this.Swiperimgs = data.Swiperimgs
        this.icons = data.icons
        this.SellList = data.SellList
        this.WeekList = data.WeekList
      })
    }
  },
  activated () {
    // 每次进入页面都调用，类似小程序 onshow
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getIndexdata()
    }
  }
}
</script>

<style scoped>
</style>
