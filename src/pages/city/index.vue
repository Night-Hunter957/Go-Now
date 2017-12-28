<template>
  <div class="main">
  	<city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
  import cityHeader from './cityHeader'
  import citySearch from './citySearch'
  import cityList from './cityList'
  export default {
    components: {
      cityHeader,
      citySearch,
      cityList
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
