<template>
	<div>
    <div class="title-box">
      <h2 class="hotviews-title">
        主题推荐
        <span class="hotviews-more">更多<i class="iconfont right-arr">&#xe610;</i></span>
      </h2>
    </div>
    <div class="btn_hotel">
        <ul>
          <li v-for='(item,index) in datas' v-text="item.name" :class="{active:index == num}" @click="tab(index)"></li>
        </ul>
    </div>
    <div class="hotviews-info border-bottom" ref="hotscroll">
      <ul class="hotviews-list">
        <li class="hotviews-item" v-for="item in recommend" :key="item.id" @click="handlChangeCity(item.address)">
          <router-link :to="'/destination/' + item.address" class="hotviews-item" tag="div">
            <img v-lazy="item.imgUrl" alt="" class="item-img" >
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
    props: ['recommend'],
    data () {
      return {
        datas: [{
          name: '特色酒店'
        }, {
          name: '超值酒店'
        }, {
          name: '吃货根据地'
        }, {
          name: '私人海滩'
        }, {
          name: '血拼购物'
        }, {
          name: '朝拜历史'
        }],
        num: '0'
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.hotscroll, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      recommend () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      tab (index) {
        this.num = index
      },
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
    padding-left: .2rem;
    margin-bottom: .2rem;
  }
  .btn_hotel{
      height:2rem;
      padding: 0 .4rem 0 .7rem;
  }
  .btn_hotel li{
    float:left;  
    width: 28%;
    margin-right: 4%;
    margin-bottom:15px;
    border:1px solid #333;
    height:.6rem;
    line-height:.6rem;
    text-align:center;
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
    font-size: .22rem;
    color: #808080;
    right: .2rem;
    margin-top: .05rem;
    line-height: .22rem;
  }
  .right-arr {
    font-size: .22rem;
    line-height: .22rem;
    float: right;
  }
  .hotviews-info {
    overflow: hidden;
    width: 100%;
    padding-left: .2rem;
  }
  .hotviews-info::before {
    border-color: #9e9e9e;
  }
  .hotviews-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 26.7rem;
  }
  .hotviews-item {
    display: flex;
    white-space: nowrap;
    width: 3.3rem;
  }
  .item-img {
    width: 3rem;
    height:2rem;
    margin-bottom: .2rem;
  }
  .item-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: .2rem;
  }
  .item-addr {
    display: block;
    width: 100%;
    overflow: hidden;
    font-size: .3rem;
    font-weight: 900;
    margin-bottom: .3rem;
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
  .active{
    background:#feb92e;
    border-color:#feb92e!important;
  }
</style>