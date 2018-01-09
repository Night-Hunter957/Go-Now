<template>
  <div>
    <h2 class="hottravel-title">热门游记</h2>
    <div class="hottravel-info border-bottom" ref="hotscroll">
      <ul class="hottravel-list">
        <li class="hottravel-item" v-for="item in travels" :key="item.id">
          <router-link :to="'/travelInfo/' + item.id" tag="div">
            <img :src="item.imgUrl" alt="" class="item-img">
            <p class="item-title">{{item.title}}</p>
            <div class="item-user">
              <img v-lazy="item.userImg" alt="" class="item-userimg">
              <p class="item-comment">
                <span class="browse">{{item.browseNum}}</span>浏览·
                <span class="reply">{{item.reply}}</span>评论
              </p>
            </div>
          </router-link>  
        </li>
      </ul>
    </div> 
    <div>
        <p class="more-travel">查看更多<i class="iconfont">&#xe601;</i></p>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
    props: ['travels'],
    mounted () {
      this.scroll = new BScroll(this.$refs.hotscroll, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      travels () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
}
</script>

<style scoped>
  .hottravel-title {
    width: 100%;
    overflow: hidden;
    line-height: .88rem;
    font-size: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hottravel-info {
    overflow: hidden;
    width: 100%;
  }
  .hottravel-info::before {
    border-color: #9e9e9e;
  }
  .hottravel-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 48.6rem;
  }
  .hottravel-item {
    width: 5rem;
    margin-right: .28rem;
  }
  .item-img {
    display: block;
    width: 100%;
    margin-bottom: .28rem;
  }
  .item-title {
    width: 100%;
    height: .76rem;
    overflow: hidden;
    margin-bottom: .1rem;
    line-height: .38rem;
    font-weight: 600;
    font-size: .32rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .more-travel {
    background: #fff;
    line-height: .88rem;
    color: #44c9e0;
    text-align: center;
  }
  .item-user {
    width: 100%;
    margin-bottom: .2rem;
    display: flex;
    justify-content: space-between;
  }
  .item-userimg {
    height: .4rem;
    width: .4rem;
    border-radius: 50%;
  }
  .browse,.reply {
    margin-right: .1rem;
  }
</style>