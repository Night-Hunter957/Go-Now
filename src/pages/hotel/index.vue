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
  import axios from 'axios'
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
        axios.get('/static/hotel.json?' + this.city)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          res.data.adds && (this.adds = res.data.adds)
          res.data.recommend && (this.recommend = res.data.recommend)
          res.data.strategy && (this.strategy = res.data.strategy)
        }
      },
      handleGetDataErr () {
        console.log('获取信息失败')
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