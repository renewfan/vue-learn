<template>
  <!-- <h1>{{msg}}</h1> -->
  <!-- 组件使用 -->
  <index-header></index-header>
</template>

<script>
// 引入组件
import IndexHeader from './components/Header'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Index'
    }
  },
  // 注册组件
  components: {
    IndexHeader
  }
}
</script>

<style scoped>

</style>
