<template>
  <div>
    <div class="banner-top">
      <img class="top-img" src="../../assets/banner_02.jpg">
    </div>
    <search></search>
    <common-icons></common-icons>
    <selection :selectionInfo="selectionInfo"></selection>
    <couple :coupleInfo="coupleInfo"></couple>
    <babytrip :babytripInfo="babytripInfo"></babytrip>
    <movietrip :movietripInfo="movietripInfo"></movietrip>
    <destination-footer></destination-footer>
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
      }
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