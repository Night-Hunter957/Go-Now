<template>
  <div class="registerBox">
  	<div class="header">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">注册</h1>
    </div>
    <div class="phone">
      <span>账号</span>
      <input type="text" ref="conPhone" placeholder="请输入手机号" autofocus>
    </div>
    <div class="mes">
      <span class="text">短信验证码</span>
      <input type="text" ref="vali" @blur="validationConfirm">
      <span @click="getValidation" class="validation">获取验证码</span>
    </div>
    <div class="nickname">
      <span>昵称</span>
      <input @blur="nameConfirm" ref="conName" type="text" placeholder="昵称为6-15位">
    </div>
    <div class="setpass">
      <span>设置密码</span>
      <input @blur="passConfirm" type="password" ref="passtype" placeholder="6-15位数字或字母" >
      <img @click="handlePassSee" src="/static/img/eye.png">
    </div>
    <div class="read" >点击完成注册即同意《即刻出发用户注册协议》</div>
    <div @click="handleComplete" class="regsucc">完成注册</div>
    <transition name="fade">
    <div class="tips1" v-show="tipsBox">{{tips}}</div>
    </transition>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'register',
    data () {
      return {
        tips: '',
        tipsBox: false,
        identifying: ''
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
        const regPhone = /1(3|5|7|8)[\d]{9}/g
        const str = this.$refs.conPhone.value
        let hasPhone = false
        console.log(str)
        if (regPhone.test(str)) {
          this.tipsBox = false
          hasPhone = true
          axios.get('/static/send_register_code.json',
            {
              phone: str
            }).then(this.handleIdentifyingSucc.bind(this))
              .catch(this.handleIdentifyingSucc.bind(this))
        } else {
          this.tipsBox = true
          this.tips = '请输入正确的手机格式'
          setTimeout(() => {
            this.tipsBox = false
          }, 2000)
        }
        return hasPhone
      },
      validationConfirm () {
        let hasValidation = false
        if (this.$refs.vali.value && this.$refs.vali.value === this.identifying) {
          hasValidation = true
          console.log(this.identifying)
        } else {
          this.tipsBox = true
          this.tips = '请填写验证码'
          setTimeout(() => {
            this.tipsBox = false
          }, 2000)
        }
        return hasValidation
      },
      nameConfirm () {
        const regName = /^.{6,15}/
        const str = this.$refs.conName.value
        let hasNickname = false
        if (regName.test(str)) {
          hasNickname = true
        } else {
          this.tipsBox = true
          this.tips = '昵称至少6-15位'
          setTimeout(() => {
            this.tipsBox = false
          }, 2000)
        }
        return hasNickname
      },
      passConfirm () {
        const regPass = /^[0-9a-z]{6,15}/
        const str = this.$refs.passtype.value
        let hasPassword = false
        if (regPass.test(str)) {
          hasPassword = true
        } else {
          this.tipsBox = true
          this.tips = '密码至少6-15位'
          setTimeout(() => {
            this.tipsBox = false
          }, 2000)
        }
        return hasPassword
      },
      handleComplete () {
        console.log(this.getValidation())
        console.log(this.validationConfirm())
        console.log(this.nameConfirm())
        console.log(this.passConfirm())

        var username = this.$refs.conPhone.value
        var identifying = this.$refs.vali.value
        var nickname = this.$refs.conName.value
        var password = this.$refs.passtype.value
        if (this.getValidation() && this.validationConfirm() && this.nameConfirm() && this.passConfirm()) {
          axios.post('/static/register.json',
            {
              phone: username,
              nick: nickname,
              code: identifying,
              pwd: password
            }).then(this.handleRegisterSucc.bind(this))
              .catch(this.handleRegisterErr.bind(this))
        } else {
          this.tipsBox = true
          this.tips = '请填写完整！'
          setTimeout(() => {
            this.tipsBox = false
          }, 2000)
        }
      },
      handleRegisterSucc (res) {
        console.log(res)
      // "state": 0,
      // "desc": "账号已存在"
      // "state": 1,
      // "desc": "注册成功"
      // "state": 2,
      // "desc": "服务器错误"
        if (res.data.data.register) {
          this.$router.push({path: '/login'})
        }
      },
      handleRegisterErr () {
        alert('服务器错误！')
      },
      handleIdentifyingSucc (res) {
        if (res && res.data) {
          this.identifying = res.data.number
        }
      },
      handleIdentifyingErr () {
        alert('服务器错误！')
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
    justify-content:space-around
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
      width:30%
      border:none
    .validation
      width:35%
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
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      padding-left: .2rem
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
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      padding-left: .2rem
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
    background:#ffa500
    text-align:center
    font-weight:900
    font-size:.36rem
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