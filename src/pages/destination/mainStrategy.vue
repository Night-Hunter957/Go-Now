<template>
  <div>
    <h2 class="strategy-title">自行游攻略</h2>
    <div class="strategy-info border-bottom" ref="strategyscroll">
      <ul class="strategy-list">
        <li class="strategy-item" v-for="item in strategy" :key="item.id">
          <div class="item-user">
            <p class="item-title">{{item.title}}</p>
            <p class="item-comment">
              <span class="browse">{{item.browseNum}}</span>浏览·
              <span class="collect">{{item.collect}}</span>收藏
            </p>
          </div>
          <img :src="item.imgUrl" alt="" class="item-img">
        </li>
      </ul>
    </div> 
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
    props: ['strategy'],
    mounted () {
      this.scroll = new BScroll(this.$refs.strategyscroll, {
        click: true
      })
    },
    watch: {
      watch: {
        strategy () {
          this.$nextTick(() => {
            this.scroll.refresh()
          })
        }
      }
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