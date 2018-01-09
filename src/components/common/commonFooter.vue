<template>
	<div class="common-footer">
    <div class="footer-con border-top" ref="footer">
      <router-link to="/" tag="div" class="footer-items">
        <i class="items-icon item-index"></i>
        <em class="items-name" ref="index">首页</em>
      </router-link>

      <router-link :to="'/destination/' + city" tag="div" class="footer-items">
        <i class="items-icon item-destination"></i>
        <em class="items-name" ref="destination">目的地</em>
      </router-link>

      <router-link to="/" tag="div" class="footer-items">
        <i class="items-icon item-hotel"></i>
        <em class="items-name" ref="hotel">酒店</em>
      </router-link>

      <router-link to="/" tag="div" class="footer-items">
        <i class="items-icon item-mine"></i>
        <em class="items-name" ref="mine">我的</em>
      </router-link>
      
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    let title = this.$route.name
    switch (title) {
      case 'index' : this.$refs.index.style.fontWeight = 900
        break
      case 'destination' : this.$refs.destination.style.fontWeight = 900
        break
      case 'hotel' : this.$refs.hotel.style.fontWeight = 900
        break
      case 'mine' : this.$refs.mine.style.fontWeight = 900
        break
    }
  }
}
</script>

<style scoped>
	.common-footer {
    position: relative;
    height: 1rem;
    width: 100%;
  }
  .footer-con {
    display: flex;
    justify-content: space-around;
    position: fixed;
    height: 1rem;
    width: 100%;
    bottom: 0;
    background: #fff;
  }
  .footer-con::before {
    border-color: #9e9e9e;
  }
  .footer-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
    text-align: center;
  }
  .items-icon {
    display: inline-block;
    height: .4rem;
    width: .4rem;
  }
  .item-index {
    background: url(../../../static/img/首页icon.png);
    background-size: 100% 100%;
  }
  .item-destination {
    background: url(../../../static/img/目的地icon.png);
    background-size: 100% 100%;
  }
  .item-hotel {
    background: url(../../../static/img/酒店icon.png);
    background-size: 100% 100%;
  }
  .item-mine {
    background: url(../../../static/img/我的icon.png);
    background-size: 100% 100%;
  }
  .items-name {
    margin-top: .1rem;
    font-size: .24rem;
  }
</style>