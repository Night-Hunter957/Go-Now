<template>
	<div class="destination-footer">
    <div class="footer-con border-top" ref="footer">
      <router-link to="/" tag="div" class="footer-items">
        <i class="iconfont items-icon">&#xe608;</i>
        <em class="items-name">首页</em>
      </router-link>

      <router-link to="/destination" tag="div" class="footer-items">
        <i class="iconfont items-icon">&#xede8;</i>
        <em class="items-name">目的地</em>
      </router-link>

      <router-link to="/destination" tag="div" class="footer-items">
        <i class="iconfont items-icon">&#xe604;</i>
        <em class="items-name">酒店</em>
      </router-link>

      <router-link to="/destination" tag="div" class="footer-items">
        <i class="iconfont items-icon">&#xe629;</i>
        <em class="items-name">我的</em>
      </router-link>
      
    </div> 
  </div>
</template>

<script>
	export default {}
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
    font-size: .4rem;
    color: #ea440f;
  }
  .items-name {
    margin-top: .1rem;
    font-size: .24rem;
  }
</style>