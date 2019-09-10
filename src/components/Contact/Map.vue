<template>
 <div>
    <div class="map-content">
        <div id="container" style="width:600px; height:500px;float: left;"></div>
        <div class="contact-way">
            <div class="title">联系方式</div>
            <p><i class="iconfont icon-dianhua"></i> 总部电话： <span class="phone">020-0668668</span></p>

            <p><i class="iconfont icon-shouji"></i> 傅总： <span class="phone">15913149406</span></p>

            <p><i class="iconfont icon-shouji"></i> 潘经理： <span class="phone">15913149406</span></p>

            <p><i class="iconfont icon-mailenvelopeletteremailnewsletter"></i> <span>1017463614@qq.com</span></p>
            <p><i class="iconfont icon-location"></i> <span>中山市沙溪宝嘉上筑</span></p>

        </div>
    </div>
 </div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'Maps',
  data () {
    return {}
  },
  methods: {
    loadmap () {
      let map = new AMap.Map('container', {
        resizeEnable: true, // 是否监控地图容器尺寸变化
        center: [113.341565, 22.510116], // 初始化地图中心点
        zoom: 18, // 初始化地图层级
        lang: 'zh_cn',
        viewMode: '3D',
        rotateEnable: true,
        pitchEnable: true,

        expandZoomRange: true,
        zooms: [3, 20],
        buildingAnimation: true
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.ControlBa'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
        map.addControl(new AMap.Geolocation())
        map.setDefaultCursor('pointer')
      })
      // let text = new AMap.Text({
      //   text: '总部',
      //   anchor: 'center', // 设置文本标记锚点
      //   draggable: true,
      //   cursor: 'pointer',
      //   angle: 10,
      //   style: {
      //     'padding': '.75rem 1.25rem',
      //     'margin-bottom': '1rem',
      //     'border-radius': '.25rem',
      //     'background-color': 'white',
      //     'width': '15rem',
      //     'border-width': 0,
      //     'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
      //     'text-align': 'center',
      //     'font-size': '20px',
      //     'color': 'blue'
      //   },
      //   position: [113.341565, 22.510116]
      // })
      // text.setMap(map)

      var marker = new AMap.Marker({
        position: map.getCenter(),
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        offset: new AMap.Pixel(-13, -30)
      })

      marker.setMap(map)

      // 设置鼠标划过点标记显示的文字提示
      marker.setTitle('总 部')

      // 设置label标签
      // label默认蓝框白底左上角显示，样式className为：amap-marker-label
      marker.setLabel({
        offset: new AMap.Pixel(1, 1), // 设置文本标注偏移量
        content: "<div class='info'>总 部</div>", // 设置文本标注内容
        direction: 'right' // 设置文本标注方位
      })
    }
  },
  mounted () { // created 方法不行
    this.loadmap()
  }
}
</script>
<style>
.map-content {
  width: 100%;
  height: 500px;
}
.amap-demo {
  height: 300px;
}
.amap-icon img {
  width: 25px;
  height: 34px;
}

.amap-marker-label{
  border: 0;
  background-color: transparent;
}

.info{
  background-color: #fff;
  padding: 5px;
  box-shadow:0 0 1px #000 inset;
  position: relative;
  top: 0;
  right: 0;
  min-width: 0;
}
.contact-way {
  text-align: left;
  float: left;
  width: calc(100% - 620px);
  height: 100%;
  margin-left: 20px;
}
.contact-way .title{
  width:83px;
  height:20px;
  font-size:20px;
  font-family:MicrosoftYaHei;
  font-weight:400;
  color:rgba(57,135,231,1);
  line-height:49px;
  padding-bottom: 40px;
}

</style>
