<template>
  <div>
    <h2 class="strategy-title">自行游攻略</h2>
    <transition name="loading">  
      <div class="loadingBox" v-show="isLoading">
        <img class="loadImg" src="../../../static/juhua.gif" alt="">
        <span>正在加载……</span>
      </div>
    </transition>
    <div class="strategy-info border-bottom" ref="strategyscroll">
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
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'

export default {
    props: ['strategy'],
    name: 'mainStrategy',
    data () {
      return {
        isLoading: false,
        pageNum: 1,
        loadstrategy: []
      }
    },
    methods: {
      createScroller () {
        this.scroll = new BScroll(this.$refs.strategyscroll, {
          click: true,
          bounceTime: 700,
          probeType: 3
        })
      },
      bindEvents () {
        this.scroll.on('scroll', this.handleScroll.bind(this))
        this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handleScroll (e) {
        if (e.y > 60 && !this.isLoading) {
          setTimeout(() => {
            this.getListInfo()
          }, 1000)
          this.isLoading = true
        }
      },
      handleScrollEnd () {
        this.isLoading = false
      },
      getListInfo () {
        this.$http.get('/api/loadStrategy.json?city=' + this.city + '&page=' + this.pageNum)
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.body : null
        if (res && res.strategy) {
          this.loadstrategy = this.loadstrategy.concat(res.strategy)
          this.pageNum += 1
        }
      }
    },
    watch: {
      list () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    computed: {
      ...mapState(['city']),
      list () {
        return this.loadstrategy.concat(this.strategy)
      }
    },
    mounted () {
      this.createScroller()
      this.bindEvents()
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
    height: 8rem;
  }
  .strategy-info::before {
    border-color: #9e9e9e;
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
</style>