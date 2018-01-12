<template>
  <div>
    <div class="banner-top">
      <img class="top-img" src="../../assets/banner_02.jpg">
    </div>
    <search></search>
    <common-icons></common-icons>
    <!-- <div class="banner-mid" >
      <img v-for="item of bannerInfo" :key="item.id" class="mid-img" :src="item.imgUrl">
    </div> -->
    <selection :selectionInfo="selectionInfo"></selection>
    <couple :coupleInfo="coupleInfo"></couple>
    <babytrip :babytripInfo="babytripInfo"></babytrip>
    <movietrip :movietripInfo="movietripInfo"></movietrip>
    <destination-footer></destination-footer>
    <div v-show="isTop" class="toTop" @click="handleScrollBack"><img src="static/img/toTop.png"></div>
  </div>
</template>
<script>
  import Search from 'components/common/search'
  import destinationFooter from '../../components/common/commonFooter'
  import commonIcons from '../../components/common/commonIcons'
  import Selection from './selection'
  import Couple from './couple'
  import Babytrip from './babytrip'
  import Movietrip from './movietrip'

  export default {
    name: 'index',
    data () {
      return {
        bannerInfo: [],
        selectionInfo: [],
        coupleInfo: [],
        babytripInfo: [],
        movietripInfo: [],
        isTop: false
      }
    },
    methods: {
      getIndexData () {
        this.$http.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data) {
          this.bannerInfo = body.data.addMid
          this.selectionInfo = body.data.selection
          this.coupleInfo = body.data.coupletrip
          this.babytripInfo = body.data.babyTrip
          this.movietripInfo = body.data.movietrip
        }
      },
      bindScroll () {
        window.addEventListener('scroll', this.handleScroll.bind(this))
      },
      handleScroll () {
        this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        if (this.scrolltop > 400) {
          this.isTop = true
        } else {
          this.isTop = false
        }
      },
      handleScrollBack () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        var speed = Math.floor(scrollTop / 5)
        var timer = setInterval(function () {
          scrollTop = scrollTop - speed
          window.scrollTo(0, scrollTop)
          if (scrollTop <= 5) { clearInterval(timer) }
        }, 20)
      }
    },
    mounted () {
      this.bindScroll()
    },
    components: {
      Search,
      commonIcons,
      Selection,
      Couple,
      Babytrip,
      Movietrip,
      destinationFooter
    },
    created () {
      this.getIndexData()
    }
  }
</script>
<style scoped lang="stylus">
  .banner-top
    width:100%
    height:3.15rem
    line-height: 3.15rem
    text-align: center
    .top-img
      width:100%
      height:100%
  .banner-mid
    width: 100%
    height:0
    overflow: hidden
    padding-bottom:31.25%
    .mid-img
      width:100%
  .toTop
    z-index:666
    position:fixed
    left:50%
    bottom:.8rem
    width:.8rem
    height:.4rem
    img
      width:100%
      height:100%
      transform:translateX(-50%)
</style>