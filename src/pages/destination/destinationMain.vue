<template>
	<div class="destination-main">
		<div class="main-adds">
			<img :src="adds" alt="">
		</div>
		<div class="main-hotviews">
        <main-destination :views="views"></main-destination>
        <main-travels :travels="travels"></main-travels>
        <main-strategy :strategy="strategy"></main-strategy>
		</div>
	</div>
</template>

<script>
  import mainDestination from './mainDestination'
  import mainTravels from './mainTravels'
  import mainStrategy from './mainStrategy'
  export default {
    components: {
      mainDestination,
      mainTravels,
      mainStrategy
    },
    props: ['adds', 'views', 'travels', 'strategy']
  }
</script>

<style scoped>
  .main-adds {
    margin: .2rem;
  }
  .main-adds img{
    width: 100%;
  }
  .main-hotviews {
    padding-left: .4rem;
    overflow: hidden;
    background: #fff;
  }

  
</style>