<template>
  <div class="login-box">
    <div class="header">
  	  <img class="back" @click="handleBack" src="/static/img/back.png">
  	  <h1 class="title">即刻出发</h1>
    </div>

   
    <div class="login">
  	  <div class="way">
    		<div @click="handleAcount" :class="{borderbtm:emailFlag}" class="account">账号登录</div>
    		<div @click="handleMes" :class="{borderbtm:phoneFlag}" class="sms">短信验证登录</div>
  	  </div>
  	  <div class="login-cont">
        <email-flag v-show="emailFlag" @getUser="getUserSucc" @getpassword="getpasswordSucc"></email-flag>
        <phone-flag v-show="phoneFlag" @getPhone="getPhoneSucc" @getMes="getMesSucc"></phone-flag>
  	  </div>
  	  <button @click="handleLogin" class="login-btn">登录</button>
    </div>
    <third-path v-show="emailFlag"></third-path>
    <!-- <div class="blank"></div> -->
    
    <router-link to="/register" tag="div" class="reg-now">立即注册</router-link>
  </div>
</template>
<script>
import axios from 'axios'
import emailFlag from './emailFlag'
import thirdPath from './thirdPath'
import phoneFlag from './phoneFlag'
export default {
  components: {
    emailFlag,
    phoneFlag,
    thirdPath
  },
  name: 'login',
  data () {
    return {
      acount: '',
      password: '',
      phone: '',
      phoneFlag: false,
      emailFlag: true
    }
  },
  methods: {
    handleAcount () {
      this.phoneFlag = false
      this.emailFlag = true
    },
    handleMes () {
      this.phoneFlag = true
      this.emailFlag = false
    },
    handleBack () {
      this.$router.go(-1)
    },
    getUserSucc (user) {
      this.acount = user
    },
    getpasswordSucc (password) {
      this.password = password
    },
    getPhoneSucc (phone) {
      this.phone = phone
    },
    getMesSucc (mes) {
      this.mes = mes
    },
    handleLogin () {
      if (this.emailFlag) {
        if (this.acount && this.password) {
          axios.post('/static/login.json',
            {
              username: this.acount,
              password: this.password
            }).then(this.handleLoginSucc.bind(this))
          .catch(this.handleLoginErr.bind(this))
        } else {
          alert('账号或密码为空')
        }
      }
      if (this.phoneFlag) {
        if (this.phone && this.mes) {
          axios.post('/static/login.json',
            {
              phone: this.phone,
              mes: this.mes
            }).then(this.handleLoginSucc.bind(this))
            .catch(this.handleLoginErr.bind(this))
        } else {
          console.log('账号或密码为空')
        }
      }
    },
    handleLoginSucc (res) {
      const status = res.data.data.login
      //      "state": 0,
      //      "desc": "账号不存在"

      //      "state": 1,
      //      "desc": "登录成功"

      //      "state": 2,
      //      "desc": "账号密码错误"

      //      "state": 3,
      //      "desc": "服务器错误"
      if (status === 1) {
        this.$router.push({path: '/'})
      }
    },
    handleLoginErr () {
      console.log('服务器错误！')
    }
  }
}
</script>
<style scoped lang="stylus">
  .login-box
    background: #fff
    position: relative
    height: 100vh
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
      min-height:2.87rem
      .way
        display:flex
        height:.84rem
        flex-direction: row
        justify-content: space-around
        line-height:.84rem
        border-bottom:1px solid #ccc
        .account
          font-size:.30rem
          display:inline-block
        .sms
          font-size:.30rem
          display:inline-block
    .login-cont
      height:2.03rem
      box-sizing:border-box
      padding:0 .2rem
      width:100%
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
      border-radius:.1rem
      font-size:.36rem
      font-weight:900
    .reg-now
      background: #fff
      display:flex
      justify-content:center
      width:96%
      position:fixed
      bottom:.2rem
      height:1rem
      left:2%
      line-height:1rem
      border:1px solid #ccc
      box-sizing:border-box
      text-align:center
      font-size:.34rem
      font-weight:900
    .borderbtm
      border:none
      font-weight:600
      border-bottom:2px solid orange
</style>