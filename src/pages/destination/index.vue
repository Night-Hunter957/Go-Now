<template>
	<div class="destination">
		<destination-header :headerInfo="headerInfo"></destination-header>
    <common-icons></common-icons>
    <destination-main 
      :adds="adds" 
      :views="views" 
      :travels="travels"
      :strategy="strategy">
    </destination-main>
    <common-footer></common-footer>
	</div>
</template>
<script>
  import destinationHeader from './destinationHeader'
  import commonIcons from '../../components/common/commonIcons'
  import destinationMain from './destinationMain'
  import commonFooter from '../../components/common/commonFooter'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      destinationHeader,
      commonIcons,
      destinationMain,
      commonFooter
    },
    data () {
      return {
        headerInfo: {},
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