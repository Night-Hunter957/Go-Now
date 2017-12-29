<template>
	<div class="amap-page-container">
    <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" class="amap-demo">
    </el-amap>
    </div>
</template>

<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)

// 初始化vue-amap
let amapManager = VueAMap.initAMapApiLoader({
// 高德的key
  key: 'fe3e75828a1bc86b5dd5cae6d194ca6e',
// 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
export default {
  data () {
    return {
      amapManager,
      zoom: 12,
      center: [121.59996, 31.197646],
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0
      }]
    }
  }

}
</script>

<style scoped>
  .amap-page-container {
    height: 100%;
  }
	.amap-demo {
      height: 100%;
  }
</style>
<style>
  body{
    height:100%;
  }
</style>

























