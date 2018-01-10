<template>
	<div class="destination-header" ref="header">
    <div class="search-con" ref="search">
      <span class="iconfont search-history">&#xe60e;</span>
      <span class="search-box" ref="searchBox">
        <router-link to="/city" tag="span" class="search-box">
          {{headerInfo.searchtxt}}
        </router-link>
      </span>
      <router-link to="/Chinesemap" tag="div">
        <span class="iconfont search-position">&#xe626;</span>
      </router-link>
    </div>
    <div class="header-position">
      <div class="position-addr">
          <span class="addr-city">
          <router-link to="/city" tag="div" class="routerLink">
            <i class="cityicon"></i>
            <em class="city">{{city}}</em>
          </router-link>
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
  import { mapState } from 'vuex'
  export default {
    props: ['headerInfo'],
    computed: {
      ...mapState(['city']),
      getRandBG () {
        const maxIndex = this.headerInfo.viewImg.length - 1
        return Math.round(Math.random() * maxIndex)
      },
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
    watch: {
      headerInfo () {
        this.$nextTick(() => {
          this.$refs.header.style.backgroundImage = 'url(' + this.headerInfo.viewImg[this.getRandBG] + ')'
        })
      }
    },
    methods: {
      bindScroll () {
        this.proxyFn = this.handleScroll.bind(this)
        window.addEventListener('scroll', this.proxyFn)
      },
      unbindScroll () {
        window.removeEventListener('scroll', this.proxyFn)
      },
      handleScroll () {
        const scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrolltop > 150) {
          this.$refs.search.classList.add('search-con-top')
          this.$refs.searchBox.classList.add('search-box-top')
        } else {
          this.$refs.search.classList.remove('search-con-top')
          this.$refs.searchBox.classList.remove('search-box-top')
        }
      }
    },
    created () {
      this.bindScroll()
    },
    destroyed () {
      this.unbindScroll()
    }
  }
</script>
<style scoped lang="stylus">
  .destination-header {
    height: 4.6rem;
    width: 100%;
    background-size: 100% 100%;
    background-color:#000; 
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
    background: #f5f5f5;
    color: #feb92f;
    z-index: 99999;
  }
  .search-box-top {
    border: 1px solid #feb92f!important;
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
    height: 2rem;
    width: 100%;
    padding-top: 1.64rem;
    color: #fff;
  }
  .position-addr {
    width: 50%;
    margin-left: .38rem;
  }
  .addr-city { 
    display: inline-block;
    font-size: .5rem;
    font-weight: 400;
    margin-left: .1rem;  
  }
  .addr-province {
    overflow: hidden;
    width: 100%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .addr-city {
    

  }
  .routerLink {
    display: flex;
    justify-content: center;
    max-width: 4rem;
    min-width: 2.2rem;
    line-height: 1rem;
    background: rgba(0,0,0,0.5);
    border-radius: .2rem;
  }
  .city {
    overflow: hidden;
    max-width: 2.6rem;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cityicon {
    height: .44rem;
    width: .44rem;
    background: url(../../../static/img/cityicon.png);
    background-size: 100% 100%;
    margin: .28rem .14rem;
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