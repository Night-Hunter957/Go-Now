<template>
	<div class="destination">
		<destination-header :headerInfo="headerInfo"></destination-header>
    <destination-icons :iconsInfo="iconsInfo"></destination-icons>
	</div>
</template>
<script>
  import destinationHeader from './destinationHeader'
  import destinationIcons from './destinationIcons'
  export default {
    components: {
      destinationHeader,
      destinationIcons
    },
    data () {
      return {
        headerInfo: {},
        iconsInfo: []
      }
    },
    methods: {
      getDestData () {
        this.$http.get('/static/destination.json')
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data) {
          this.headerInfo = body.data.headerInfo
          this.iconsInfo = body.data.icons
          console.log(this.iconsInfo)
        }
      }
    },
    created () {
      this.getDestData()
    }
  }
</script>
<style scoped lang="stylus">
  .destination {
    height:4.08rem;
    width: 100%;
  }
  
</style>