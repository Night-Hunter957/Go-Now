<template>
	<div class="mine">
    <mine-header></mine-header>
    
    <welcome-box></welcome-box>
    
    <mine-icons></mine-icons>

    <div class="blank"></div>
		<common-footer></common-footer>
	</div>
</template>

<script>
import commonFooter from '../../components/common/commonFooter'
import welcomeBox from './welcomeBox.vue'
import mineIcons from './mineIcons.vue'
import mineHeader from './mineHeader.vue'

export default {
  components: {
    commonFooter,
    welcomeBox,
    mineIcons,
    mineHeader
  }
}
</script>

<style scoped>
  .mine {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .blank {
    flex: 1;
    background: #fff;
  }
</style>