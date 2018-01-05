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
  import { mapState, mapMutations } from 'vuex'
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
    computed: {
      ...mapState(['city'])
    },
    watch: {
      city () {
        this.getDestData()
      }
    },
    methods: {
      ...mapMutations(['getCity']),
      getDestData () {
        this.$http.get('/static/destination.json?' + this.city)
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.body : null
        if (res && res.data) {
          res.data.headerInfo && (this.headerInfo = res.data.headerInfo)
          res.data.icons && (this.iconsInfo = res.data.icons)
          res.data.adds && (this.adds = res.data.adds)
          res.data.views && (this.views = res.data.views)
          res.data.travels && (this.travels = res.data.travels)
          res.data.strategy && (this.strategy = res.data.strategy)
        }
      },
      changeCity () {
        if (!this.city) {
          this.getCity(this.$route.params.city)
        }
      }
    },
    created () {
      this.changeCity()
      this.getDestData()
    }
  }
</script>
<style scoped lang="stylus">
  .destination {
    height:100%;
    width: 100%; 
  }
  
</style>