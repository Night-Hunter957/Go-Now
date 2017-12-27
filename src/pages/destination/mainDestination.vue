<template>
	<div>
    <h2 class="hotviews-title">热门目的地</h2>
    <div class="hotviews-info border-bottom" ref="hotscroll">
      <ul class="hotviews-list">
        <li class="hotviews-item" v-for="item in views" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-img">
          <p class="item-txt">
            <span class="item-addr">{{item.address}}</span>
            <span class="item-visitors">
              <i class="number">{{item.visiterNum}}</i>
              人去过
            </span>
          </p>
        </li>
      </ul>
    </div> 
    <div>
        <p class="more-views">查看更多<i class="iconfont">&#xe601;</i></p>
    </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
    props: ['views'],
    mounted () {
      this.scroll = new BScroll(this.$refs.hotscroll, {
        scrollX: true,
        scrollY: false,
        click: true
      })
    },
    watch: {
      views () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
}
</script>

<style scoped>
  .hotviews-title {
    width: 100%;
    overflow: hidden;
    line-height: .88rem;
    font-size: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotviews-info {
    overflow: hidden;
    width: 100%;
  }
  .hotviews-info::before {
    border-color: #9e9e9e;
  }
  .hotviews-list {
    display: flex;
    flex-wrap: wrap;
    width: 18rem;
  }
  .hotviews-item {
    display: flex;
    width: 4rem;
  }
  .item-img {
    width: 1.88rem;
    height: 1.34rem;
    margin-bottom: .3rem;
  }
  .item-txt {
    padding: .2rem;
  }
  .item-addr {
    display: block;
    width: 100%;
    overflow: hidden;
    font-size: .4rem;
    font-weight: 900;
    margin-bottom: .2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-visitors {
    font-size: .24rem;
  }
  .more-views {
    background: #fff;
    line-height: .88rem;
    color: #44c9e0;
    text-align: center;
  }
  .number {
    display: inline-block;
    width: .8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>