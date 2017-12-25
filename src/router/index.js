import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Destination from '@/pages/destination/destination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/destination',
      name: 'destination',
      component: Destination
    }
  ]
})
