import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'
import Fastclick from 'fastclick'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

Fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/img/loaderror.png',
  loading: '../static/img/defaultimg.png',
  attmpt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
