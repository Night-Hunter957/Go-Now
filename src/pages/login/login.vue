<template>
  <div>
    <div class="header">
  	  <img class="back" src="/static/img/back.png">
  	  <h1 class="title">即刻出发欢迎您</h1>
    </div>
    <div class="login">
  	  <div class="way">
  		<div @click="handleAcount" :class="{border:emailFlag}" class="account">账号登陆</div>
  		<div @click="handleMes" :class="{border:phoneFlag}" class="sms">短信验证登录</div>
  	  </div>
  	  <div class="login-cont">
  	  	<div v-show="emailFlag" class="user">
  	  	  <span>账号</span>
  	  	  <input type="text" placeholder="手机/邮箱">
  	  	</div>
  	  	<div v-show="phoneFlag" class="mes">
  	  	  <select class="sel-phone">
  	  	  	<option>中国 +86</option>
  	  	  	<option>香港 +852</option>
  	  	  	<option>澳门 +853</option>
  	  	  	<option>台湾 +886</option>
  	  	  </select>
  	  	  <input type="text" placeholder="输入手机号">
  	  	</div>
  	  	<div v-show="emailFlag" class="password">
          <span>密码</span>
          <input ref="passtype" type="password" >
          <img @click="handlePassClick" src="/static/img/eye.png">
          <p>忘记密码</p>
  	  	</div>
        <div v-show="phoneFlag" class="mes-confirm">
          <span>短信验证码</span>
          <input type="text">
          <button>获取验证码</button>
        </div> 
  	  </div>
  	  <button class="login-btn">登录</button>
    </div>
    <div class="third">
      <img src="static/img/line-left.png">
      第三方账号
      <img src="static/img/line-right.png">
	  </div>
    <div class="icons">
      <div><img src="static/img/qq.png">QQ</div>
      <div><img src="static/img/wechat.png">微信</div>
      <div><img src="static/img/sina.png">微博</div>
    </div> 
    <router-link to="/register" tag="div" class="reg-now">立即注册</router-link>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        phoneFlag: false,
        emailFlag: true
      }
    },
    methods: {
      handlePassClick () {
        if (this.passShow) {
          this.$refs.passtype.type = 'text'
        } else {
          this.$refs.passtype.type = 'password'
        }
        this.passShow = !this.passShow
      },
      handleAcount () {
        this.phoneFlag = false
        this.emailFlag = true
      },
      handleMes () {
        this.phoneFlag = true
        this.emailFlag = false
      }
    }
}
</script>
<style scoped lang="stylus">
  .header
    position: relative
    height: .93rem
    line-height: .93rem
    width:100%
    .back
      position:absolute
      left:.17rem
      top:.25rem
      width:.25rem
      height:.41rem
    .title
      font-size:.32rem
      width:2.4rem
      margin:0 auto
  .login
    height:2.87rem
    .way
      display:flex
      height:.84rem
      flex-direction: row
      justify-content: space-around
      line-height:.84rem
      border-bottom:1px solid #ccc
      margin-bottom:.2rem
      .account
        font-size:.30rem
        display:inline-block
      .sms
        font-size:.30rem
        display:inline-block
  .login-cont
    height:2.03rem
    box-sizing:border-box
    padding:0 0.2rem
    width:100%
    .user
      position:relative
      height:1.01rem
      line-height:1.01rem
      width:100%
      border-bottom:1px solid #ccc
      span
        margin-left:.2rem
        font-size:.28rem
        font-weight:600
      input
        position:absolute
        width:6.1rem
        height:1rem
        left:1rem
        border:none
    .mes
      display:flex
      flex-dirction:row
      justify-content:space-around
      box-sizing:border-box
      height:1.01rem
      width:100%
      border-bottom:1px solid #ccc
      select
        width:1.65rem
        border:none
        color:blue
        margin-right:.2rem
      input
        flex:1
        border:none
    .password
      position:relative
      height:1.01rem
      line-height:1.01rem
      width:100%
      border-bottom:1px solid #ccc
      span
        margin-left:.2rem
        font-size:.28rem
        font-weight:600
      input
        position:absolute
        width:6.1rem
        height:1rem
        left:1rem
        border:none
      img
        position:absolute
        right:0.2rem
        top:.4rem
        width:.32rem
        height:.2rem
      p
        position:absolute
        right:0
        top:1rem;
        width:1.2rem
        height:.34rem
        font-size:.28rem
    .mes-confirm
      display:flex
      flex-direction:row
      justify-content:space-around
      width:100%
      height:1.01rem
      line-height:1.01rem
      border-bottom:1px solid #ccc
      span
        font-weight:600
      input
        border:none
        flex:1
      button
        width:2.19rem
        height:.64rem
        margin-top:.2rem
        background:yellow
        border:none
  .login-btn
    display:flex
    justify-content:center
    width:95%;
    box-sizing:border-box
    margin:0 auto 
    margin-top:1rem
    height:1rem
    background:orange
    color:#fff
    font-size:.32rem
    border:none
    border-radius:.2rem
  .third
    width:100%
    margin-top:2.7rem
    height:.33rem
    box-sizing:border-box
    padding:0 .4rem
    color:#000
    text-align:center
    img
      width:36%
  .icons
    display:flex
    flex-direction:row
    justify-content:space-around
    height:1.24rem
    margin-top:1.06rem
    div
      width:2.3rem
      box-sizing:border-box
      padding:0 .6rem
      text-align:center
    img
      width:100%
      height: 1rem
      margin-bottom:.3rem
  .reg-now
    display:flex
    justify-content:center
    width:96%
    position:absolute
    bottom:.8rem
    height:1rem
    left:2%
    line-height:1rem
    border:1px solid #ccc
    box-sizing:border-box
    background:#f2f2f2
    text-align:center
  .border
    border:none
    font-weight:600
    border-bottom:2px solid orange
</style>