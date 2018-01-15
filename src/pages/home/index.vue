<template>
  <div>
    <div class="banner-top">
      <img class="top-img" :src="bannerInfo" >
    </div>
    <search></search>
    <icons></icons>
    <selection :selectionInfo="selectionInfo"></selection>
    <couple :coupleInfo="coupleInfo"></couple>
    <babytrip :babytripInfo="babytripInfo"></babytrip>
    <movietrip :movietripInfo="movietripInfo"></movietrip>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import axios from 'axios'
  import Search from './search'
  import commonFooter from '../../components/common/commonFooter'
  import Icons from './icons'
  import Selection from './selection'
  import Couple from './couple'
  import Babytrip from './babytrip'
  import Movietrip from './movietrip'

  export default {
    name: 'index',
    data () {
      return {
        bannerInfo: '',
        selectionInfo: [],
        coupleInfo: [],
        babytripInfo: [],
        movietripInfo: [],
        isTop: false
      }
    },
    methods: {
      getIndexData () {
        axios.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          this.bannerInfo = res.data.banner
          this.selectionInfo = res.data.selection
          this.coupleInfo = res.data.coupletrip
          this.babytripInfo = res.data.babyTrip
          this.movietripInfo = res.data.movietrip
        }
      },
      handleGetDataErr () {
        console.log('获取数据失败')
      }
    },
    components: {
      Search,
      Icons,
      Selection,
      Couple,
      Babytrip,
      Movietrip,
      commonFooter
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
  .selection
    background:#fff
</style>