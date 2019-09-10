<template>
    <div>
        <Header></Header>
        <div class="banner">
          <img v-bind:src="Banner.img_url" height="500px" width="100%" >
      </div>
        <div class="service-first-content">
            <div class="service-first-content-space">
                <div class="service-first-content-list">
                    <div class="service-first-content-list-li" v-for="item in serviceList" :key="item.value">
                        <div class="content-list-li-left"><img v-bind:src="item.img_url"  width="363px" height="242px"></div>
                        <div class="content-list-li-right">
                          <h3>{{item.title}}</h3>
                          <h4>{{item.desc}}</h4>
                          <p>{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-introduce">
                <h3 class="service-first-content-title">我们的核心业务</h3>
                <div class="service-first-content-desc">
                    以策略、创意、设计、艺术、服务为核心的互联网运营公司
                </div>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Header/Footer'
export default {
  name: 'Service',
  data () {
    return {
      serviceList: [],
      Banner: {}
    }
  },
  created () {
    this.getService()
    this.getBannerList()
  },
  methods: {
    async getBannerList () {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      var _this = this
      try {
        // 定义参数对象
        let params = {
          banner_category: 1001103,
          per_page: 1,
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
    },
    async getService () {
      var _this = this
      try {
        var res = await this.$api.Service.getServiceList()
        _this.serviceList = res.data
        console.log('返回数据data', res.data)
        console.log('返回数据', res)
      } catch (e) {
        console.log('catch -> e', e)
      }
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .service-first-content {
    width: 100%;
  }
  .service-introduce {
    float: left;
    margin-top: 41px;
    margin: 0 auto;
    width: 90%;
    height: 100px;
  }
  .service-first-content-space {
    width:100%;
    height:1200px;
    background:rgba(245,245,245,1);
  }
  .service-first-content-list {
    padding-top: 60px;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    /* background-color:red; */
  }
  .service-first-content-list-li {
    width: 100%;
    height: 260px;
    float: left;
    background-color: #ffffff;
  }
  .service-first-content-list-li .content-list-li-left, .service-first-content-list-li  .content-list-li-right {
    float: left;
  }
  .service-first-content-list-li .content-list-li-right {
    margin-left: 30px;
    float: left;
    text-align: left;
    width: calc( 100% - 393px);
  }
</style>
