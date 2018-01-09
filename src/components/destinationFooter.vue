<template>
	<div class="destination-footer">
    <div class="footer-con border-top" ref="footer">
      <router-link to="/" tag="div" class="footer-items">
        <i class="items-icon item-index"></i>
        <em class="items-name">首页</em>
      </router-link>

      <router-link :to="'/destination/' + city" tag="div" class="footer-items">
        <i class="items-icon item-destination"></i>
        <em class="items-name">目的地</em>
      </router-link>

      <router-link to="/destination" tag="div" class="footer-items">
        <i class="items-icon item-hotel"></i>
        <em class="items-name">酒店</em>
      </router-link>

      <router-link to="/destination" tag="div" class="footer-items">
        <i class="items-icon item-mine"></i>
        <em class="items-name">我的</em>
      </router-link>
      
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped>
	.destination-footer {
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
    background: url(../../static/img/首页icon.png);
    background-size: 100% 100%;
  }
  .item-destination {
    background: url(../../static/img/目的地icon.png);
    background-size: 100% 100%;
  }
  .item-hotel {
    background: url(../../static/img/酒店icon.png);
    background-size: 100% 100%;
  }
  .item-mine {
    background: url(../../static/img/我的icon.png);
    background-size: 100% 100%;
  }
  .items-name {
    margin-top: .1rem;
    font-size: .24rem;
  }
</style>