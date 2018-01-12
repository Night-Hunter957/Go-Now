<template>
  <div class="search">
  	<div class="logo">
     <img class="logo-img" src="static/img/logo.png"> 
    </div>
  	<div class="search-input"><input  class="cont" type="text" placeholder="旅行年货大街正式开卖"></div>
  	<div class="mes">
     <img class="mes-img" src="../../assets/message.png">  
    </div>
  </div>
</template>
<script>
  export default {
    name: 'search'
  }
</script>
<style scoped lang="stylus">
  .search 
    display:flex;
    height:1.3rem
    background: white
    .logo 
      float:left
      width: 1.6rem
      margin-top:.42rem
      height: .52rem
      margin-left: .35rem
      .logo-img
        width: 100%
        height: 100%
    .search-input 
      position: relative
      float:left
      flex:1
      height: .63rem
      line-height: 1.3rem
      background: yellow
      margin:0.34rem .47rem 0 .25rem
      .cont
        position: absolute
        text-align: center
        width:100%
        height:100%
    .mes 
      float:left
      width:.36rem
      height:.4rem
      line-height: 1.3rem
      margin-right:.47rem
      margin-top:.45rem
      .mes-img
        float:right
        width:100%
        height:100%
</style>