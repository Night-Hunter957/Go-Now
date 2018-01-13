<template>
  <div class="registerBox">
  	<div class="header">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">注册</h1>
    </div>
    <div class="phone">
      <span>账号</span>
      <input type="text" ref="conPhone" placeholder="请输入手机号 ">
    </div>
    <div class="mes">
      <span class="text">短信验证码</span>
      <input type="text" >
      <span @click="getValidation" class="validation">获取验证码</span>
    </div>
    <div class="nickname">
      <span>昵称</span>
      <input @blur="nameConfirm" ref="conName" type="text" placeholder="6-15位数字或字母">
    </div>
    <div class="setpass">
      <span>设置密码</span>
      <input @blur="passConfirm" type="password" ref="passtype" placeholder="6-15位数字或字母" >
      <img @click="handlePassSee" src="/static/img/eye.png">
    </div>
    <div class="read" >点击完成注册即同意《即刻出发用户注册协议》</div>
    <div @click="handleComplete" class="regsucc">完成注册</div>
    <transition name="fade">
    <div class="tips1" v-if="phoneConfirm"><span>! </span>请输入正确的手机格式</div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'register',
    data () {
      return {
        phoneConfirm: false,
        Confirm: 0
      }
    },
    methods: {
      handlePassSee () {
        if (this.passShow) {
          this.$refs.passtype.type = 'text'
        } else {
          this.$refs.passtype.type = 'password'
        }
        this.passShow = !this.passShow
      },
      handleBack () {
        this.$router.go(-1)
      },
      getValidation () {
        // this.phoneConfirm = true
        // setTimeout(() => {
        //   this.phoneConfirm = false
        // },2000)
        const regPhone = /1(3|5|7|8|4)[\d]{9}/g
        const str = this.$refs.conPhone.value
        console.log(str)
        if (regPhone.test(str)) {
          this.phoneConfirm = false
          this.Confirm++
        } else {
          this.phoneConfirm = true
          setTimeout(() => {
            this.phoneConfirm = false
          }, 2000)
        }
      },
      nameConfirm () {
        const regName = /^[0-9a-z]{6,15}/
        const str = this.$refs.conName.value
        if (regName.test(str)) {
          this.Confirm++
        }
      },
      passConfirm () {
        const regPass = /^[0-9a-z]{6,15}/
        const str = this.$refs.passtype.value
        if (regPass.test(str)) {
          this.Confirm++
        }
      },
      handleComplete () {
        var username = this.$refs.conPhone.value
        var nickname = this.$refs.conName.value
        var password = this.$refs.passtype.value
        if (this.Confirm >= 3) {
          this.$http.post('/static/register.json',
            {
              username: username,
              nickname: nickname,
              password: password
            }, {emulateJSON: true}).then(this.handleRegisterSucc.bind(this))
          this.$router.push({path: '/login'})
        }
      },
      handleRegisterSucc (res) {
        console.log(res)
      }
    }
  }
</script>
<style scoped lang="stylus">
.registerBox
  background: #fff
  height: 100vh
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
      width:30%
      margin-left:.2rem
      font-size:.3rem
      font-weight:600
      height:.3rem
    input
      flex:1
      width:40%
      border:none
    .validation
      width:30%
      font-size:.26rem
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
    line-height:1.3rem
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
    border-radius:.1rem
  .tips1
    position:absolute
    top:0
    left:0
    width:100%
    height:.93rem
    line-height:.93rem
    background:red
    text-align:center
    span
      font-weight:600
      font-size:.32rem
      color:#fff
      line-height:.93rem
  .fade-enter-active, .fade-leave-active {
      transition: opacity 1s;
    }
  .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>