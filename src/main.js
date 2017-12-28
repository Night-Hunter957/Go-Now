import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont/iconfont.css'
import Fastclick from 'fastclick'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

Fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/loaderror.png',
  loading: '../static/defaultimg.png',
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
