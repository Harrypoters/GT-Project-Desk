<template>
    <div class="news">
        <Header></Header>
        <div class="banner">
            <img v-bind:src="Banner.img_url" height="500px" width="100%" >
        </div>

        <div class="news-first-content">
            <div>
                <h3 class="news-first-content-title">新闻资讯</h3>
                <div class="news-first-content-desc">
                    家居设计简单的说，就是家庭居住环境、办公场所、公共空间或者是商业空间的整体陈设风格以及饰品设计搭配。随着人们生活水平提高，人们对家具设计的要求也越来越高.
                </div>
                <div class="content-ul">
                    <div class="content-li">
                        <div class="content-li-left" v-for="item in newsList" :key="item.value">
                           <div class="content-img">
                              <img v-bind:src="item.img_url" width="200px" height="200px">
                           </div>
                           <div class="content-desc">
                             <p class="title">{{item.title}}</p>
                             <div class="desc">
                                {{item.content}}
                             </div>
                             <p class="content-ul-bottom"><span class="content-ul-date">{{item.publish_time}}</span><span class="content-ul-name">{{item.publish_name}}</span></p>
                           </div>
                        </div>
                    </div>

                    <div class="content-li-page">
                      <el-pagination
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[5, 10, 20, 40]"
                      :page-size="pagesize"
                      layout="total ,prev, pager, next"
                      :total="total"
                      prev-text="上一页"
                      next-text="下一页">
                      </el-pagination>

                    </div>

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
  name: 'News',
  data () {
    return {
      currentPage: 1, // 默认显示页面为1
      pagesize: 10, //    每页的数据条数
      total: null,
      newsList: [],
      Banner: {}
    }
  },
  created () {
    this.getNewsData()
    this.getBannerList()
  },
  methods: {
    async getBannerList () {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      var _this = this
      try {
        // 定义参数对象
        let params = {
          per_page: 1,
          banner_category: 1001102,
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
    async getNewsData () {
      var _this = this
      try {
        // 定义参数对象
        let params = {
          per_page: _this.pagesize,
          page: _this.currentPage
        }
        let res = await this.$api.News.getNewsList(params)
        _this.newsList = res.data
        _this.total = res.meta.pagination.total

        console.log(_this.newBannerList)
        console.log('返回数据data', res.data)
        console.log('返回数据', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
    // 每页下拉显示数据
    handleSizeChange: function (size) {
      this.pagesize = size
      this.getNewsData()
    },
    // 点击第几页
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      this.getNewsData()
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .news-first-content {
    width: 90%;
    height: 1546px;
    margin: 0 auto;
  }
  .news-first-content .news-first-content-desc {
    margin: 0 auto;
    width:475px;
    height:55px;
    font-size:8px;
    font-family:35;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:16px;
  }
  .content-ul {
    width: 100%;
    height: 1500px;
  }
  .content-ul  .content-li {
    margin-top: 35px;
    width: 100%;
    height: 225px;
  }
  .content-ul .content-li-left, .content-ul .content-li-right {
    float: left;
    width: 50%;
    border-bottom: 1px solid rgba(203,203,203);
    margin-bottom: 30px;
  }
  .content-li-left .content-img, .content-desc, .content-li-right .content-img, .content-desc{
    float: left;
  }
  .content-li-left .content-desc, .content-li-right .content-desc {
    margin-left: 10px;
    width: calc(100% - 230px);
    height:186px;
  }
  .content-li-left .content-desc .title, .content-li-right .content-desc .title {
    text-align: left;
    width:100%;
    height:23px;
    font-size:16px;
    font-family:35;
    font-weight:400;
    color:rgba(138,171,171,1);
    line-height:16px;
  }
  .content-li-left .content-desc .desc,   .content-li-right .content-desc .desc {
    text-align: left;
    height: 56%;
    font-size:11px;
    font-family:35;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:19px;
  }
  .content-ul .content-ul-date {
    float: left;
  }
  .content-ul .content-ul-name {
    float: right;
  }
  .content-li-page {
    margin-top: 45px;
    width: 100%;
    float: left;
  }

</style>
