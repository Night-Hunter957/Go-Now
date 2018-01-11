<template>
  <div class="selection">
  	<h2 class="title">
  		<span class="tipL">情侣旅行</span>
  		<span class="tipR">查看更多</span>
  	</h2>
  	<div class="selBox" ref="wrapper">
  	  <ul class="selList">
  	  	<li class="selCont" 
  	  		v-for="item of coupleInfo"
  	  		:key="item.id">
  	  	  <img class="sel-img" :src="item.imgUrl">
  	  	  <p class="sel-desc" v-text="item.title"></p>
  	  	  <div class="sel-res">
  	  	  	<div class="res-left">
  	  	  	  <img src="https://n3-q.mafengwo.net/s10/M00/AE/EF/wKgBZ1lkcRiAXs8iAALY5sXyY7s27.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90">隔壁老李
  	  	  	</div>
  	  	  	<div class="res-right">
  	  	  	  <span>6666</span>浏览
  	  	  	  <span>42</span>评论
  	  	  	</div>
  	  	  </div>
  	  	</li>
  	  </ul>
  	</div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    name: 'couple',
    props: {
      coupleInfo: Array
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      coupleInfo () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
}
</script>
<style scoped lang="stylus">
  .selection
    box-sizing:border-box
    height:7rem
    width:100%
    padding-left:.3rem
    padding-top:.3rem
    .title
      height:.8rem
      .tipL
        float:left
      .tipR
        float:right
        margin-right:.2rem
    .selBox
      width: 100%
      overflow: hidden
      height:7rem
      .selList
        display:flex
        flex-wrap: nowrap
        justify-content:space-between
        width:44rem;
        .selCont
          width:6.6rem
          height:5.35rem
          margin-right:.4rem
          .sel-img
            width:6.6rem
            height:3.7rem
          .sel-desc
            margin-top:.2rem
            width: 6.6rem
            height: 1.09rem
            line-height:.38rem
            font-size: .32rem
          	color:#000
          	margin-bottom:.3rem
          .sel-res
            display:flex
            justify-content:space-between
            height:.47rem
            line-height:.47rem
            .res-left
              img
                width:.5rem
                height:.5rem
                border-radius:50%
</style>