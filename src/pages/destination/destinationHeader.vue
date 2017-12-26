<template>
	<div class="destination-header" ref="header">
    <div class="search-con" ref="search">
      <span class="iconfont search-history">&#xe60e;</span>
      <span class="search-box" ref="searchBox">年终大促爆款清单</span>
      <span class="iconfont search-position">&#xe626;</span>
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
    },
    mounted () {
      window.onscroll = function () {
        const scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrolltop > 150) {
          this.$refs.search.classList.add('search-con-top')
          this.$refs.searchBox.classList.add('search-box-top')
        } else {
          this.$refs.search.classList.remove('search-con-top')
          this.$refs.searchBox.classList.remove('search-box-top')
        }
      }.bind(this)
    },
    watch: {
      headerInfo: function () {
        this.$nextTick(() => {
          this.$refs.header.style.backgroundImage = 'url(' + this.headerInfo.viewImg + ')'
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  .destination-header {
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
  }
  .search-con {
    width: 100%;
    display: flex;
    padding-top: .5rem;
    padding-bottom: .2rem;
    color: #fff;
    position: fixed;
    top: 0;
  }
  .search-con-top {
    background: #fff;
    color: #ea440f;
    z-index: 99999;
  }
  .search-box-top {
    border: 1px solid #ea440f!important;
    color: #000!important;
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
    border: 1px solid #fff;
  }
  .header-position {
    display: flex;
    height: 1.6rem;
    width: 100%;
    padding-top: 1.54rem;
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
    bottom: .2rem;
  }
  .temp-icon {
    color: #fed375;
  }
  .header-time {
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: .4rem;
    font-size: .3rem;
    color: #fff;
    padding: .3rem .38rem;
  }
  .time-date,.time-week {
    overflow: hidden;
    width: 40%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .time-week {
    text-align: right;
  }
</style>