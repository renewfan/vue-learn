import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import City from '@/pages/city/index'
import detail from '@/pages/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 页面每次进入都恢复到初始位置
    return { x: 0, y: 0 }
  }
})
