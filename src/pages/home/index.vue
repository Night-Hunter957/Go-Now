<template>
	<div class="router">
    <p class="demo">Vue.js框架 例子</p>
		<router-link :to="'/destination/'+ '定位失败'">
			<span>点击进入<i>"目的地"</i>页面</span>
		</router-link>
	</div>
</template>
<script>
export default {
  name: 'Index'
}
</script>
<style scoped >
	.router {
    margin: 6rem auto;
    text-align: center;
    font-size: .5rem;
  }
  .demo {
    margin-bottom: .6rem;
  }
  .router i {
    font-size: .6rem;
    color: red;
  }
</style>