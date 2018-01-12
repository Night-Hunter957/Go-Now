<template>
  <div>
  	<div class="header">
  	  <img class="back" src="/static/img/back.png" @click="tolastrouter">
  	  <h1 class="title">注册</h1>
    </div>
    <div class="phone">
      <span>账号</span>
      <input type="text" placeholder="请输入手机号 ">
    </div>
    <div class="mes">
      <span class="text">短信验证码</span>
      <input type="text" >
      <span class="validation">获取验证码</span>
    </div>
    <div class="nickname">
      <span>昵称</span>
      <input type="text" placeholder="6-15位数字或字母">
    </div>
    <div class="setpass">
      <span>设置密码</span>
      <input type="password" ref="passtype" placeholder="6-15位数字或字母" >
      <img @click="handlePassSee" src="/static/img/eye.png">
    </div>
    <input class="read" type="checkbox" name="">我已阅读<<即刻出发用户注册条例>>
    <div class="regsucc">完成注册</div>
  </div>
</template>
<script>
  export default {
    name: 'register',
    // data: {

    // },
    methods: {
      handlePassSee () {
        if (this.passShow) {
          this.$refs.passtype.type = 'text'
        } else {
          this.$refs.passtype.type = 'password'
        }
        this.passShow = !this.passShow
      },
      tolastrouter () {
        this.$router.go(-1)
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
    border-bottom:1px solid #ccc
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
      text-align:center
      font-size:.38rem
  .phone
    height:1rem
    line-height:1rem
    width:96%
    padding:0 0.2rem
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      width:.94rem
      text-align:center
      font-size:.3rem
      font-weight:600
      margin-right:.3rem
    input	
      border:none
      margin-bottom:.1rem
  .mes
    display:flex
    justify-content:space-between
    align-items:center
    width:96%
    margin-left:2%
    height:1rem
    border-bottom:1px solid #ccc
    .text
      width:40%
      margin-left:.2rem
      font-size:.3rem
      font-weight:600
      height:.3rem
    input
      flex:1
      border:none
    .validation
      width:30%
      font-size:.3rem
      font-weight:600
      height:.6rem
      line-height:.6rem
      text-align:center
      background:orange
  .nickname
    display:flex
    flex-direction:row
    justify-content:space-around
    align-items:center 
    height:1rem
    line-height:1rem
    width:96%
    padding:0 0.2rem
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      width:.6rem
      text-align:center
      font-size:.3rem
      font-weight:600
      margin-right:.3rem
    input
      flex:1
      border:none
  .setpass
    display:flex
    flex-direction:row
    justify-content:space-around
    align-items:center 
    height:1rem
    line-height:1rem
    width:96%
    padding:0 0.2rem
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      width:1.2rem
      font-size:.3rem
      font-weight:600
      margin-right:.3rem
    input
      flex:1
      border:none
    img
      width:.38rem
      height:.26rem
  .read
    margin-left:.3rem
    margin-right:.2rem
    height:1.3rem
  .regsucc
    width:94%;
    height:.98rem
    line-height:.98rem
    text-align:center
    background:orange
    margin:0 0.2rem
    font-size:.34rem
    font-weight:600
    color:#fff
</style>