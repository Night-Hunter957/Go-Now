<template>
  <div class="list" ref="scroller">
    <div>
      <div class="list-area" v-for="(area, key) of cityList">
          <div class="list-title">{{key}}</div>
          <div class="list-item border-bottom" v-for="item in area">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
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
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        bounceTime: 300
      })
    }
  }
</script>

<style scoped>
  .list {
    flex: 1;
    background: #fff;
    overflow: hidden;
  }
  .list-title {
    background: #eee;
    line-height:.54rem; 
    padding-left: .3rem;
  }
  .list-item {
    line-height: .6rem;
    padding-left: .3rem;
  }
</style>
