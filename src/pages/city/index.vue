<template>
  <div class="main">
  	<city-header></city-header>
    <city-search :cityList="cityList"></city-search>
    <city-list :cityList="cityList"></city-list>
  </div>
</template>

<script>
  import cityHeader from './cityHeader'
  import citySearch from './citySearch'
  import cityList from './cityList'
  export default {
    components: {
      cityHeader,
      citySearch,
      cityList
    },
    data () {
      return {
        cityList: {}
      }
    },
    methods: {
      getCityDate () {
        this.$http.get('/static/city.json')
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.body : null
        if (res && res.data) {
          this.cityList = res.data.list
        }
      }
    },
    created () {
      this.getCityDate()
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
