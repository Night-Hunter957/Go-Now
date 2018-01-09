<template>
  <div class="icon">
	<div class="icon-list" v-for="item of iconsInfo" :key="item.id">
	  <img class="icon-img" :src="item.imgUrl">
	  <p class="icon-title">{{item.title}}</p>
	</div>
  </div>
</template>
<script>
  export default {
    name: 'icons',
    props: {
      iconsInfo: Array
    }
  }
</script>
<style scoped lang="stylus">
  .icon 
    overflow: hidden
    display: flex
    flex-wrap: wrap
    width: 100%
    .icon-list 
      width:33.3%
      padding-top: .3rem
      text-align: center
      .icon-img 
        width: 1rem
        height: 1rem
        .icon-title 
          margin-top: .16rem
          font-size: .28rem
          color: #333 
</style>