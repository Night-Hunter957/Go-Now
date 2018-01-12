<template>
	<div class="welcome-box">
    <div class="welcome-con">
      <div class="login-entrance">
        <div class="user-img">
          <img src="../../../static/img/userimg.png" alt="" class="userimg">
        </div>
        <router-link to="/login" tag="div" class="login-txt">
          登录/注册
        </router-link>
      </div>
      <div class="welcome-word">欢迎来到即刻出发！</div>
    </div>
  </div>
</template>

<script>
	export default {}
</script>

<style scoped>
	.welcome-box {
    height: 4.3rem;
    background: #fff;
    padding: .3rem .2rem .56rem .2rem;
    box-sizing:border-box;
  }
  .welcome-con {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100%;
    border:.01rem solid #ffbf1c;
    border-radius: .2rem;
    box-sizing:border-box;
    box-shadow: 0 .1rem .1rem 0 #b9b2b2;
  }
  .login-entrance {
    display: flex;
    height: 2.6rem;
  }
  .user-img {
    height: 100%;
    width: 2.6rem;
  }
  .userimg {
    height: 1.4rem;
    margin: .6rem;
  }
  .login-txt {
    flex: 1;
    font-size: .4rem;
    line-height: 2.6rem;
    font-weight: bold;
    text-indent: 1rem;
  }
  .welcome-word {
    flex: 1;
    background: #ffbf1c;
    color: #fff;
    font-size: .32rem;
    font-weight: 400;
    text-align: center;
    line-height: .82rem;
  }
</style>