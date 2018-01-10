<template>
	<div>
    <div class="title-box">
      <h2 class="hotviews-title">
        热门目的地
        <span class="hotviews-more">更多<i class="iconfont right-arr">&#xe601;</i></span>
      </h2>
    </div>
    <div class="hotviews-info border-bottom" ref="hotscroll">
      <ul class="hotviews-list">
        <li class="hotviews-item" v-for="item in views" :key="item.id" @click="handlChangeCity(item.address)">
          <router-link :to="'/destination/' + item.address" class="hotviews-item" tag="div">
            <img v-lazy="item.imgUrl" alt="" class="item-img" >
            <p class="item-txt">
              <span class="item-addr">{{item.address}}</span>
              <span class="item-visitors">
                <i class="number">{{item.visiterNum}}</i>
                <em>人去过</em>
              </span>
            </p>
          </router-link>
        </li>
      </ul>
    </div> 
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'
export default {
    props: ['views'],
    mounted () {
      this.scroll = new BScroll(this.$refs.hotscroll, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      views () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handlChangeCity (city) {
        this.getCity(city)
      },
      ...mapMutations(['getCity'])
    },
    computed: {
      ...mapState(['city'])
    }
}
</script>

<style scoped>
  .title-box {
    padding: .28rem 0;
    box-shadow: 0px 1px 2px 2px #999;
    margin-bottom: .2rem;
  }
  .hotviews-title {
    box-sizing:border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-left: .2rem;
    line-height: .32rem;
    font-size: .3rem;
    font-weight: 900;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-left: .06rem solid #fdb92f;
  }
  .hotviews-more {
    position: absolute;
    font-size: .2rem;
    color: #808080;
    right: .2rem;
    line-height: .32rem;
  }
  .right-arr {
    font-size: .4rem;
    line-height: .32rem;
    float: right;
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
    justify-content: space-between;
    width: 18rem;
  }
  .hotviews-item {
    display: flex;
    width: 4.4rem;
  }
  .item-img {
    width: 1.88rem;
    height: 1.34rem;
    margin-bottom: .3rem;
  }
  .item-txt {
    flex: 1;
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
    display: flex;
    justify-content: flex-start;
    font-size: .24rem;
    line-height: .28rem;
  }
  .number {
    display: inline-block;
    max-width: 1rem;
    font-size: .24rem;
    line-height: .28rem;
    font-weight: 700;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>