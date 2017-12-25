<template>
	<div class="destination">
		<div class="destination-header">
			<img :src="headerInfo.viewImg" alt="" class="header-img">
      <div class="search-con">
        <div class="header-search">
          <span class="iconfont search-history">&#xe60e;</span>
          <span class="search-box">年终大促爆款清单</span>
          <span class="iconfont search-position">&#xe600;</span>
        </div>
      </div>
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        headerInfo: {}
      }
    },
    methods: {
      getDestData () {
        this.$http.get('/static/destination.json')
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data) {
          this.headerInfo = body.data.headerInfo
        }
      }
    },
    created () {
      this.getDestData()
    }
  }
</script>
<style scoped lang="stylus">
  .destination {
    height:4.08rem;
    width: 100%;
  }
  .destination-header {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .header-img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .search-con {
    height: 100%;
    width: 100%;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: .5rem;
    color: #fff;
    background: linear-gradient(to right top, rgba(215,69,90,1) , rgba(191,172,166,0));
  }
</style>