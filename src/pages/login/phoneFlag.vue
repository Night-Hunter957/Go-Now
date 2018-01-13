<template>
	<div>
    <div class="phoneuser">
      <input ref="phone" type="text" placeholder="请输入手机号码" @change="phonechange">
    </div>
    <div class="mes-confirm">
      <input ref="mes" type="text" placeholder="短信验证码" @change="meschange">
      <button>获取验证码</button>
    </div> 
  </div>
</template>

<script>
export default {
  methods: {
    phonechange () {
      this.$emit('getPhone', this.$refs.phone.value)
    },
    meschange () {
      this.$emit('getMes', this.$refs.mes.value)
    }
  }
}
</script>

<style scoped lang="stylus">
  .phoneuser
    height:1.01rem
    line-height:1.01rem
    width:100%
    border-bottom:1px solid #ccc
    padding-left:.2rem
    box-sizing:border-box
    input
      position:absolute
      width:100%
      height:.98rem
      border:none
  .mes-confirm
    display:flex
    flex-direction:row
    justify-content:space-around
    width:100%
    padding-left:.2rem
    box-sizing:border-box
    height:1.01rem
    line-height:1.01rem
    border-bottom:1px solid #ccc
    span
      font-weight:600
    input
      border:none
      flex:1
    button
      width:1.8rem
      height:.64rem
      margin-top:.2rem
      background:#feb82c
      border:none
</style>