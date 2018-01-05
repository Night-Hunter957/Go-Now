<template>
  <div>
    <h2 class="strategy-title">自行游攻略</h2>
    <div class="strategy-info">
      <ul class="strategy-list">
        <li class="strategy-item" v-for="item in list" :key="item.id">
          <div class="item-user">
            <p class="item-title">{{item.title + pageNum}}</p>
            <p class="item-comment">
              <span class="browse">{{item.browseNum}}</span>浏览·
              <span class="collect">{{item.collect}}</span>收藏
            </p>
          </div>
          <img v-lazy="item.imgUrl" alt="" class="item-img">
        </li>
      </ul>
    </div>
    <transition name="loading">  
      <div class="loadingBox" v-show="isLoading" ref="loadingBox">
        <img class="loadImg" src="../../../static/juhua.gif" alt="">
        <span>正在加载……</span>
      </div>
    </transition>
    <div class="toTop" v-show="toTopShow" ref="toTop" @click="totopClick">
      <span class="iconfont toTopicon">&#xe61b;</span>
    </div> 
  </div>
</template>

<script>
  import { mapState } from 'vuex'
export default {
    props: ['strategy'],
    name: 'mainStrategy',
    data () {
      return {
        a: 0,
        pageNum: 1,
        isLoading: false,
        toTopShow: false,
        loadstrategy: []
      }
    },
    watch: {
      list () {
        this.isLoading = false
      }
    },
    methods: {
      getListInfo () {
        this.$http.get('/static/loadStrategy.json?city=' + this.city + '&page=' + this.pageNum)
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.body : null
        if (res && res.strategy) {
          this.loadstrategy = this.loadstrategy.concat(res.strategy)
          this.pageNum += 1
        }
      },
      bindScroll () {
        this.proxyFn = this.handleScroll.bind(this)
        window.addEventListener('scroll', this.proxyFn)
      },
      unbindScroll () {
        window.removeEventListener('scroll', this.proxyFn)
      },
      handleScroll () {
        const pageHeight = document.body.clientHeight
        const screenHeight = window.screen.height
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop >= pageHeight - screenHeight - 40 && !this.isLoading) {
          this.getListInfo()
          this.isLoading = true
          this.toTopShow = true
        } else if (scrollTop <= 10) {
          this.toTopShow = false
        }
      },
      totopClick () {
        var timer = null
        clearInterval(timer)
        let scrollTop = document.documentElement.scrollTop
        timer = setInterval(function () {
          scrollTop = scrollTop - scrollTop / 10
          window.scrollTo(0, scrollTop)
          if (scrollTop <= 10) {
            clearInterval(timer)
          }
        }, 10)
      }
    },
    computed: {
      ...mapState(['city']),
      list () {
        return this.strategy.concat(this.loadstrategy)
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

<style scoped>
  .strategy-title {
    width: 100%;
    overflow: hidden;
    line-height: .88rem;
    font-size: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .loadingBox {
    text-align: center;
    vertical-align: middle;
    color: #9e9e9e;
    line-height: .8rem;
  }
  .loading-enter-active,.loading-leave-active {
    transition: opacity .5s;
  }
  .loading-enter,.loading-leave-active-to {
    opacity: 0;
  }
  .loadImg {
    height: .28rem;
    width: .28rem;
  }
  .strategy-info {
    overflow: hidden;
    width: 100%;
  }
  .strategy-list {
    width: 100%;
  }
  .strategy-item {
    display: flex;
    justify-content: space-between;
    box-sizing:border-box;
    width: 100%;
    padding: .2rem;
    padding-left: 0;
  }
  .item-img {
    display: block;
    width: 2.3rem;
    height: 1.64rem;
  }
  .item-title {
    height: .76rem;
    overflow: hidden;
    line-height: .38rem;
    font-weight: 600;
    font-size: .32rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .item-user {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  .browse,.collect {
    margin-right: .1rem;
  }
  .toTop{
    position: fixed;
    right: 0;
    bottom: 1.6rem;
    color: #0885f5;
    background: #fff;
    border-radius: 50%;
  }
  .toTopicon {
    font-size: .8rem;
  }
</style>