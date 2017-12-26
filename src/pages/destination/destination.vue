<template>
	<div class="destination">
		<destination-header :headerInfo="headerInfo"></destination-header>
    <destination-icons :iconsInfo="iconsInfo"></destination-icons>
    <destination-main 
      :adds="adds" 
      :views="views" 
      :travels="travels"
      :strategy="strategy">
    </destination-main>
    <destination-footer></destination-footer>
	</div>
</template>
<script>
  import destinationHeader from './destinationHeader'
  import destinationIcons from './destinationIcons'
  import destinationMain from './destinationMain'
  import destinationFooter from './destinationFooter'
  export default {
    components: {
      destinationHeader,
      destinationIcons,
      destinationMain,
      destinationFooter
    },
    data () {
      return {
        headerInfo: {},
        iconsInfo: [],
        views: [],
        travels: [],
        strategy: [],
        adds: ''
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
          this.adds = body.data.adds
          this.views = body.data.views
          this.travels = body.data.travels
          this.strategy = body.data.strategy
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