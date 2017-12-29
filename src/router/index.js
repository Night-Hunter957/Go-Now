import Vue from 'vue'
import Router from 'vue-router'
import Destination from '@/pages/destination/index'
import City from '@/pages/city/index'
import Worldmap from '@/pages/destination/map.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
// 按需加载          Webpack分片
      component: () => import('@/pages/home/index')
    }, {
      path: '/destination',
      name: 'destination',
      component: Destination
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/worldmap',
      name: 'worldmap',
      component: Worldmap
    }
  ]
})
