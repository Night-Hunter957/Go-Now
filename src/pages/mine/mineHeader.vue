<template>
  <header class="header">
    <span class="icon setting"></span>
    <span class="icon message"></span>
  </header>
</template>

<script>
	export default {}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: .88rem;
    background: #fff;
  }
  .icon {
    display: inline-block;
    height: .5rem;
    width: .5rem;
    margin:.18rem .28rem ;
  }
  .setting {
    background: url(../../../static/img/setting.png);
    background-size: 100% 100%;
  }
  .message {
    background: url(../../../static/img/message.png);
    background-size: 100% 100%;
  }
</style>