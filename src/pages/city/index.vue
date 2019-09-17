<template>
  <div>
    <cityheader></cityheader>
    <citysearch :cities="cities"></citysearch>
    <citylist :hotcities="hotcities" :cities="cities" :letter="letter"></citylist>
    <cityletterslip :cities="cities" @change="letterchange"></cityletterslip>
  </div>
</template>

<script>
import cityheader from './components/header'
import citysearch from './components/search'
import citylist from './components/scrolllist'
import cityletterslip from './components/letterslip'
import axios from 'axios'

export default {
  name: 'city',
  components: {
    cityheader,
    citysearch,
    citylist,
    cityletterslip
  },
  data () {
    return {
      cities: {},
      hotcities: [],
      letter: ''
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    getdata () {
      axios.get('/api/city.json').then(res => {
        let data = res.data.data
        this.hotcities = data.hotCities
        this.cities = data.cities
      })
    },
    letterchange (e) {
      // 字母栏点击的传值
      this.letter = e
    }
  }
}
</script>

<style scoped>
</style>
