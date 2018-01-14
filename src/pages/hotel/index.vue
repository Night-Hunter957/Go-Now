<template>
	<div class="destination">
		<hotel-header></hotel-header>
    <hotel-main 
      :recommend="recommend" 
      :strategy="strategy">
    </hotel-main>
    <common-footer></common-footer>
	</div>
</template>
<script>
  import hotelHeader from './hotelHeader'
  import hotelMain from './hotelMain'
  import commonFooter from '../../components/common/commonFooter'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      hotelHeader,
      hotelMain,
      commonFooter
    },
    data () {
      return {
        recommend: [],
        strategy: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    watch: {
      city () {
        window.scrollTo(0, 0)
        this.getDestData()
      }
    },
    methods: {
      ...mapMutations(['getCity']),
      getDestData () {
        this.$http.get('/api/hotel.json?' + this.city)
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.body : null
        if (res && res.data) {
          res.data.adds && (this.adds = res.data.adds)
          res.data.recommend && (this.recommend = res.data.recommend)
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