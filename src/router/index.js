import Vue from 'vue'
import Router from 'vue-router'
import Destination from '@/pages/destination/index'
import City from '@/pages/city/index'
import Chinesemap from '@/pages/map/map.vue'
import TravelInfo from '@/pages/destination/travel/travelInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
// 按需加载          Webpack分片
      component: () => import('@/pages/home/index')
    }, {
      path: '/destination/:city',
      name: 'destination',
      component: Destination
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/Chinesemap',
      name: 'Chinesemap',
      component: Chinesemap
    }, {
      path: '/travelInfo/:id',
      name: 'travelInfo',
      component: TravelInfo
    }
  ]
})
