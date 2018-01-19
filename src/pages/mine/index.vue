<template>
	<div class="mine">
    <mine-header></mine-header>
    
    <welcome-box  :userimg="userimg"
                  :name="name"
                  :city="city" 
                  :showInfo="showInfo"
                  :fansnum="fansnum"
                  :attentionnum="attentionnum"
                  :word="word"></welcome-box>
    
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
import axios from 'axios'
export default {
  components: {
    commonFooter,
    welcomeBox,
    mineIcons,
    mineHeader
  },
  data () {
    return {
      userimg: '../../../static/img/userimg.png',
      showInfo: false,
      name: '',
      fansnum: 0,
      attentionnum: 0,
      city: '',
      word: '欢迎来到即刻出发！'
    }
  },
  methods: {
    getDateInfo () {
      if (window.localStorage.isLogin) {
        axios.get('/static/userLogin.json')
            .then(this.handleGetDataSucc.bind(this))
            .catch(this.handleGetDataErr.bind(this))
        this.showInfo = true
        this.word = '这里就放心交给我吧！'
      }
    },
    handleGetDataSucc (res) {
      if (res.data) {
        this.userimg = res.data.data.userimg
        this.name = res.data.data.name
        this.fansnum = res.data.data.fansnum
        this.attentionnum = res.data.data.attentionnum
      }
    },
    handleGetDataErr () {
      alert('服务器发生错误！')
    }
  },
  created () {
    this.getDateInfo()
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