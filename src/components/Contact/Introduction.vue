<template>
    <div class="introduction">
         <Header></Header>
         <div class="banner">
          <img v-bind:src="Banner.img_url" height="500px" width="100%" >
        </div>
          <div class="introduction-content">
            <div class="introduction-content-content">
                <div class="introduction-content-first introduction-content-common">
                    <img src="../../assets/img/5d1b1e757c009_15.png">
                    <div class="introduction-content-content-first introduction-content-content-common">
                        <div class="title">
                            <span><span class="key-word">关于</span>我们 ABOUT US</span>
                          </div>
                        <div class="content">
                            DDDDDDDDDDDDD科技有限公司，注册于4TFEEREFF研发园，公司致力于互联网络应用软件产品的研发及相关产品的FARET服务与网络营销，打造互联网行业信息化服务领域的专业品牌。

                            公司凭借FRERTGDRFGF企业管理手段和优秀的团队，利用成熟的软件产品、丰富的企业信息化研发与服务经验以及完善的客服体系，为政府、集团及大中型企事业单位用户提供信息化软件开发与实施服务、DGSTYYYYYRSH）、ESRTGDG、电子商务DGDFVVVVVVVVV）、网络情报等范畴的信息化解决方案，FBFDGT公司 是TG5476唯一一家拥有U6TGGGGGG厂商，也是GFGDF区FDFDRT用户的最佳选择，我们以诚信，优质的服务赢得了客户的青睐~

                            基于我们对DFGBGGGGGGGGGGGGGGGGG的深入研究、服务经验与技术积累，我们服务的定位于：利用CRM开发技术和搜GGGGGGG技术为客户提供行业性解决方案、构建个性化的信DDDDDDDDDDDDD平台。我们的客户涵盖GG、GGGG、GGG、GGG、GG、GGG、GGGG、GGGG等各大行业。
                        </div>
                    </div>
                </div>
                <div class="introduction-content-second introduction-content-common">
                    <img src="../../assets/img/5d1b1e757c009_15.png">
                    <div class="introduction-content-content-second introduction-content-content-common">
                        <div class="title">
                            <span><span class="key-word">我们</span>的优势 OUR ADVANTAGE</span>
                          </div>
                        <div class="content">
                            DDDDDDDDDDDDD科技有限公司，注册于4TFEEREFF研发园，公司致力于互联网络应用软件产品的研发及相关产品的FARET服务与网络营销，打造互联网行业信息化服务领域的专业品牌。

                            公司凭借FRERTGDRFGF企业管理手段和优秀的团队，利用成熟的软件产品、丰富的企业信息化研发与服务经验以及完善的客服体系，为政府、集团及大中型企事业单位用户提供信息化软件开发与实施服务、DGSTYYYYYRSH）、ESRTGDG、电子商务DGDFVVVVVVVVV）、网络情报等范畴的信息化解决方案，FBFDGT公司 是TG5476唯一一家拥有U6TGGGGGG厂商，也是GFGDF区FDFDRT用户的最佳选择，我们以诚信，优质的服务赢得了客户的青睐~

                            基于我们对DFGBGGGGGGGGGGGGGGGGG的深入研究、服务经验与技术积累，我们服务的定位于：利用CRM开发技术和搜GGGGGGG技术为客户提供行业性解决方案、构建个性化的信DDDDDDDDDDDDD平台。我们的客户涵盖GG、GGGG、GGG、GGG、GG、GGG、GGGG、GGGG等各大行业。
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="contact-us">
              <div class="contact-us-content">
                  <div class="title">
                      <span><span class="key-word">联系我们</span> ABOUT US</span>
                    </div>
                <Maps></Maps>
              </div>
          </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Header/Footer'
import Maps from '@/components/Contact/Map'

export default {
  name: 'Introduction',
  data () {
    return {
      Banner: {}
    }
  },
  created () {
    this.getBannerList()
  },
  components: {
    Header,
    Footer,
    Maps
  },
  methods: {
    async getBannerList () {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      var _this = this
      try {
        // 定义参数对象
        let params = {
          per_page: 1,
          banner_category: 1001105,
          page: 1
        }
        let res = await this.$api.Banner.getBannerList(params)
        res.data.forEach(function (item, index) {
          _this.Banner = item
        })

        console.log('返回数据data', res.data)
        console.log('返回数据', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    }
  }

}
</script>

<style>
.introduction-content {
  width: 100%;
  height: 800px;
}
.introduction-content-content, .contact-us-content {
  margin: 0 auto;
  width: 900px;
  height: 100%;
}
.introduction-content img {
  width:406px;
  height:271px;
 }
 .introduction-content-content img {
  width:406px;
  height:271px;
 }
 .introduction-content-content-common {
   padding: 20px 0 20px;
 }
 .introduction-content-common img {
   padding-top: 68px;
 }
 .introduction-content-first img{
    float: right;
 }
 .introduction-content-second img{
    float: left;
 }
 .introduction-content-content-common .title{
  width:100%;
  text-align: left;
  height: 45px;
  font-size:20px;
  font-family:SimHei;
  font-weight:bold;
  color:rgba(57,135,231,1);
  line-height:24px;
 }
 .introduction-content-content-second {
   float: left;
   margin-left:24px;
 }
 .introduction-content-content .content{
  width:466px;
  text-align: left;
  height:293px;
  font-size:9px;
  font-family:SimHei;
  font-weight:400;
  color:rgba(102,102,102,1);
  line-height:20px;
 }
 .introduction-content-content .key-word {
  padding-bottom:5px;
  border-bottom: 3px solid #3987E7;
  font-weight: 900;
 }
 .contact-us {
   width: 100%;
   height: 600px;
 }
 .contact-us-content .title {
  width: 100%;
    text-align: left;
    height: 45px;
    font-size: 20px;
    font-family: SimHei;
    font-weight: bold;
    color: rgba(57,135,231,1);
    line-height: 24px;
 }
</style>
