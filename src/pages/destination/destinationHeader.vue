<template>
	<div class="destination-header">
		<img :src="headerInfo.viewImg" alt="" class="header-img">
    <div class="header-search">
      <div class="search-con">
        <span class="iconfont search-history">&#xe60e;</span>
        <span class="search-box">年终大促爆款清单</span>
        <span class="iconfont search-position">&#xe600;</span>
      </div>
    </div>
    <div class="header-position">
      <div class="position-addr">
        <span class="addr-city">{{headerInfo.city}}</span>
        <span class="addr-area">
          {{headerInfo.area}}
          <i class="iconfont">&#xe620;</i>
        </span>
      </div>
      <div class="position-temp">
        <span class="temp-num">
          {{headerInfo.temperature}}
          <i class="iconfont temp-icon">&#xe61a;</i>
        </span>
      </div>
    </div>
    <div class="header-time">
      <span class="time-date">{{getdate}}</span>
      <span class="time-week">{{getweek}}</span>
    </div>
	</div>
</template>
<script>
  export default {
    props: ['headerInfo'],
    computed: {
      getdate () {
        return new Date().toLocaleDateString()
      },
      getweek () {
        const week = new Date().getDay()
        switch (week) {
          case 0 : return '星期日'
          case 1 : return '星期一'
          case 2 : return '星期二'
          case 3 : return '星期三'
          case 4 : return '星期四'
          case 5 : return '星期五'
          case 6 : return '星期六'
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
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
  .header-search {
    box-sizing:border-box;
    height: 100%;
    width: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: .5rem;
    color: #fff;
    background: linear-gradient(to right top, rgba(215,69,90,1) , rgba(191,172,166,0));
  }
  .search-con {
    display: flex;
  }
  .search-history,.search-position{
    display: inline-block;
    width: .38rem;
    padding: 0 .36rem;
    font-size: .38rem;
    line-height: .54rem;
    font-weight: 900;
  }
  .search-box {
    flex: 1;
    background: #fff;
    opacity: .7;
    color: #666;
    line-height: .54rem;
    border-radius: .1rem;
    text-align: center;
  }
  .header-position {
    display: flex;
    position: absolute;
    height: 1.6rem;
    width: 100%;
    top: 1.54rem;
    z-index: 10;
    color: #fff;
  }
  .position-addr {
    width: 50%;
    margin-left: .38rem;
  }
  .addr-city {
    font-size: .28rem;
    margin-bottom: .3rem;
  }
  .addr-area { 
    font-size: .5rem;
    font-weight: 400;
    margin-left: .1rem;  
  }
  .addr-city,.addr-area {
    overflow: hidden;
    width: 100%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .position-temp {
    position: relative;
    width: 50%;
    margin-right: .38rem;
  }
  .position-temp,.position-addr {
    border-bottom: 1px solid #fff;
  }
  .temp-num {
    position: absolute;
    right: .4rem;
    bottom: .6rem;
  }
  .temp-icon {
    color: #fed375;
  }
  .header-time {
    box-sizing:border-box;
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 10;
    bottom: .3rem;
    line-height: .4rem;
    font-size: .3rem;
    color: #fff;
    padding: 0 .38rem;
  }

</style>