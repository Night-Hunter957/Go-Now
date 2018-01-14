<template>
	<div class="hotel-header" ref="header">
    <div class="hotel-con" ref="search">酒店预订</div>
    <div class="city-temp">
        <div class="title-box">
          <h2 class="hotviews-title">你想去哪里</h2>
        </div>
        <div class="hotel-tent">
          <div class="whither">
              <router-link to="/city" tag="div" class="routerLink">
                <em class="city">{{city}}</em>
                <router-link tag="div" to="/Chinesemap" class="geoloc iconfont">&#xe771;我的位置</router-link>
              </router-link>
          </div>
          <div class="hotel_date">
              <p @click = "setDate">{{data1}}入住</p>
              <p @click = "setDate2">{{data2}}离开
                  <span class="dyas">共住几晚</span>
              </p>
          </div>
          <div class="hotel_btn">
            <p class="geoL iconfont">&#xe609; 地图</p>
            <p class="hotel_search">开始搜索</p>
          </div>
        </div> 
    </div>    
	</div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['city'])
    },
    data () {
      return {
        data1: '2018-1-1',
        data2: '2018-1-1',
        days: 0
      }
    },
    watch: {
    },
    methods: {
      setDate () {
        this.$calendar.show({
          year: [2018, 2018],
          date: '2018-1-1', // 初始化的日期
          onOk: (date) => {
            this.data1 = date
          }
        })
      },
      setDate2 () {
        this.$calendar.show({
          year: [2018, 2018], // 年份的范围,如果初始化的年份不在这个范围，会自动选最小的年份
          date: '2018-1-1', // 初始化的日期
          onOk: (date) => {
            this.data2 = date
          },
          onCancel: () => {
            console.log('关闭')
          }
        })
      }
    },
    created () {},
    destroyed () {}
  }
</script>
<style scoped lang="stylus">
  .hotel_btn{
    width: 100%;
    margin-top:20px;
  }
  .geoL{
    box-sizing:border-box;
    display:inline-block;
    padding:0 .36rem;
    max-width:40%;
    height:.72rem;
    line-height:.7rem;
    border:1px solid #dadada;
    font-size:.4rem;    font-weight: bold;
  }
  .hotel_search{
    width:50%;
    float:right;
    line-height:.7rem;
    height:.7rem;
    text-align:center;
    font-size:.4rem;
    border:1px solid #feb92e;
    background:#feb92e;    font-weight: bold;
  }
  .geoloc{
    position:absolute;
    right: 0rem;
    bottom: .2rem;
    font-size: .3rem; 
  }
  .hotviews-more {
    position: absolute;
    font-size: .22rem;
    color: #808080;
    right: .2rem;
    margin-top: .05rem;
    line-height: .22rem;
  }
  .hotviews-title {
    padding-left: 0.2rem;
    line-height: 0.32rem;
    font-size: 0.3rem;
    font-weight: 900;
    border-left: .06rem solid #fdb92f;
  }
  .title-box {
    padding: .28rem 0;
    padding-left: .2rem;
  }
  .hotel-header {
    height:6.7rem;
    width: 100%;
  }
  .hotel-con {
    background-color:#fff;
    height: .88rem;
    line-height:.88rem;
    justify-content:center;
    display: flex;
    color: #000;
    font-size:.4rem;
  }
  .hotel-tent{
  position :relative;
    padding:.5rem .6rem;
    margin:.2rem;
    padding-right:.2rem;
    margin-top:0rem;
    background:#fff;
    border-radius: 5px;
  }
  .city-temp {
    box-sizing:border-box;
  }
  .city {
    overflow: hidden;
    max-width: 2.6rem;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .whither,.hotel_date{
    width:80%;
    border-bottom: 1px solid #333;
  }
  .hotel_date{
    margin-top:.3rem;
  }
  .hotel_date p{  
    font-size:.4rem;
    padding:.1rem 0;
  }
  .hotel_date span {
    font-size: .28rem;
  }
  .routerLink{
    position: relative;
    width:100%;
    font-size: .4rem;
    padding:.2rem 0rem;
  }
</style>