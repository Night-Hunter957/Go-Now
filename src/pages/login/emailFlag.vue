<template>
	<div>
  	<div class="emailuser">
  	  <span>账号</span>
  	  <input ref="acount" type="text" placeholder="手机/邮箱" @change="userchange" autofocus>
  	</div>
  	<div class="password">
      <span>密码</span>
      <input  ref="passtype" type="password" @change="passwordchange">
      <img @click="handlePassClick" src="../../../static/img/eye.png">
      <p>忘记密码</p>
  	</div>
  </div>
</template>

<script>
export default {
  methods: {
    handlePassClick () {
      if (this.passShow) {
        this.$refs.passtype.type = 'text'
      } else {
        this.$refs.passtype.type = 'password'
      }
      this.passShow = !this.passShow
      console.log(this.passShow)
    },
    userchange () {
      this.$emit('getUser', this.$refs.acount.value)
    },
    passwordchange () {
      this.$emit('getpassword', this.$refs.passtype.value)
    }
  }
}
</script>

<style scoped lang="stylus">
  .emailuser
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
</style>