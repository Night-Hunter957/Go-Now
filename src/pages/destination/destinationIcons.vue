<template>
	<div class="destination-icons">
    <div class="icons-item" v-for="item of iconsInfo" :key="item.id">
      <img :src="item.imgUrl" alt="" class="icons-img">
      <p class="icons-title">{{item.title}}</p>
    </div> 
  </div>
</template>

<script>
	export default {
  props: ['iconsInfo']
	}
</script>

<style scoped>
	.destination-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 3.6rem;
    text-align: center;
    background: #fff;
  }
  .icons-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
  }
  .icons-img {
    height: 1rem;
    width: 1rem;
  }
  .icons-title {
    margin-top: .2rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>