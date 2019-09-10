<template>
    <div>
        <div class="caroussel-banner">
            <el-carousel indicator-position="none" height="500px" >
                <el-carousel-item v-for="item in newBannerList" :key="item.value">
                    <img v-bind:src="item.img_url" height="500px" width="100%" >
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content">
            <div class="content-content">
                <div class="content-top"></div>
                <div class="content-list">
                    <div class="content-list-li content-list-first" >
                        <div class="content-list-title">
                            <div style="float: left">今日推荐</div>
                            <div style="float: right">最佳房源</div>
                        </div>
                        <div class="content-list-content content-list-content-first">
                            <img v-bind:src="BestHomes1.img_url">
                            <h3 class="plot-name">{{BestHomes1.title}}</h3>
                            <div class="plot-desc">{{BestHomes1.desc}}</div>
                        </div>
                        <div class="details-button">
                            <span>点击查看</span>
                        </div>
                    </div>
                    <div class="content-list-li  content-list-second" >
                        <div class="content-list-content content-list-content-second">
                            <img v-bind:src="BestHomes2.img_url">
                            <h3 class="plot-name">{{BestHomes2.title}}</h3>
                            <div class="plot-desc">{{BestHomes2.desc}}</div>
                        </div>
                        <div class="details-button">
                            <span>点击查看</span>
                        </div>
                    </div>
                    <div class="content-list-li" >
                        <div class="content-list-content">
                            <img v-bind:src="BestHomes3.img_url">
                            <h3 class="plot-name">{{BestHomes3.title}}</h3>
                            <div class="plot-desc">{{BestHomes3.desc}}</div>
                        </div>
                        <div class="details-button">
                            <span>点击查看</span>
                        </div>
                    </div>
                </div>

                <div class="recommend">
                    <div class="recommend-content">
                        <div class="title">为你推荐</div>
                        <div class="desc">居理新房全国新房电商,针对中山市楼盘,为您提供透明的新房信息,中山市楼盘.居理新房帮您省钱买新房-0费用-免费专车带看!</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="plot-introduce">
            <div class="plot-introduce-first">
                <div class="introduce-content-left">
                    <img v-bind:src="RecommendToYou1.img_url">
                </div>
                <div class="introduce-content-right">
                    <div class="introduce-content-right-content">
                        <div class="title">{{RecommendToYou1.title}}</div>
                        <div class="desc">
                            {{RecommendToYou1.desc}}
                        </div>
                        <div class="details-button">
                                <span>点击查看</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="plot-introduce-second">
                    <div class="introduce-content-left">
                            <img v-bind:src="RecommendToYou2.img_url">
                    </div>
                    <div class="introduce-content-right">
                        <div class="introduce-content-right-content">
                            <div class="title">{{RecommendToYou2.title}}</div>
                            <div class="desc">
                                {{RecommendToYou2.desc}}
                            </div>
                            <div class="details-button">
                                    <span>点击查看</span>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="my-team">
                <div class="my-team-content">
                    <div class="my-team-content-desc">
                        <div class="title">我们的团队</div>
                        <div class="desc">我们团队的成员有很好的协调能力和沟通能力，语言表达能力强，着力于企业各项目的前期报建工作，有着作为前锋跑在第一线的勇气和毅力，妥善处理政府部门与企业之间的关系，并谋求各方合作，是一支充满活力的队伍。</div>
                    </div>

                    <div class="my-team-content-li">

                        <div class="content" v-for="item in TeamList" :key="item.value">
                            <div class="personal">
                                <div class="personal-avatar">
                                    <img v-bind:src="item.img_url">
                                </div>
                                <div class="personal-name">
                                    {{item.name}}
                                </div>
                                <div class="personal-desc">
                                    {{item.desc}}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
console.log(this.newBannerImgUrlList)
export default {
  name: 'Carousel',
  data () {
    return {
      newBannerList: [],
      TeamList: [],
      BestHomes1: {},
      BestHomes2: {},
      BestHomes3: {},
      RecommendToYou1: {},
      RecommendToYou2: {}
    }
  },
  created () {
    this.getBannerList()
    this.getTeamList()
    this.getBestHomes()
    this.getRecommendToYou()
  },
  methods: {
    async getBannerList () {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      var _this = this
      try {
        // 定义参数对象
        let params = {
          per_page: 10,
          page: 1,
          banner_category: 1001101
        }
        let res = await this.$api.Banner.getBannerList(params)
        _this.newBannerList = res.data

        console.log('返回数据data', res.data)
        console.log('返回数据', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
    async getTeamList () {
      var _this = this
      try {
        // 定义参数对象
        let params = {
          per_page: 4,
          page: 1
        }
        let res = await this.$api.Team.getList(params)
        _this.TeamList = res.data

        console.log('TeamList', res.data)
        console.log('返回数据', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
    async getBestHomes () {
      var _this = this
      try {
        // 定义参数对象
        let params = {
          per_page: 3,
          label_id: 1002101,
          page: 1
        }
        let res = await this.$api.Listing.getBestHomes(params)

        res.data.forEach(function (item, index) {
          switch (index) {
            case 0:
              _this.BestHomes1 = item
              break
            case 1:
              _this.BestHomes2 = item
              break
            default:
              _this.BestHomes3 = item
              break
          }
          console.log('-----start-----')
          console.log(index)
          console.log(item)
        })
        console.log('返回数据data', res.data)
        console.log('返回数据', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
    async getRecommendToYou () {
      var _this = this
      try {
        // 定义参数对象
        let params = {
          per_page: 2,
          label_id: 1002102,
          page: 1
        }
        let res = await this.$api.Listing.getBestHomes(params)

        res.data.forEach(function (item, index) {
          switch (index) {
            case 0:
              _this.RecommendToYou1 = item
              break
            default:
              _this.RecommendToYou2 = item
              break
          }
          console.log('-----start-----')
          console.log(index)
          console.log(item)
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.caroussel-banner {
    width: 100%;
    height: 100%;
}
.content {
    width: 100%;
    height: 800px;
}
.content .content-content {
    width: 90%;
    height: 400px;
    margin: 0 auto;
}
.content-content .content-top {
    height: 84px;
}
.content-content .content-list {
    float: left;
    /* background-color: beige; */
    width: 100%;
    height: 800px;
    margin: 0 auto;
}
.content-list-li {
    display: inline-block;
    width:298px;
    height:700px;
    margin-left: 77px;
}

.content-list-title {
    width: 196px;
    height: 83px;
    font-size: 38px;
    font-family:59;
    font-weight:bold;
    color:rgba(42,46,67,1);
    line-height:49px;

}

.content-list-content-first {
    margin-top: 77px;
 }

 .content-list-content-second {
    margin-top: 77px;
 }

.content-list-content {
    width: 100%;
    height:494px;
    /* background-color: rgb(148, 141, 141); */
    float: left;
}
.content-list-content img {
    width: 100%;
    height: 338px;
}
.content-list-content .plot-name {
    float: left;
    margin-left: 12px;
    font-size:21px;
    font-family:59;
    font-weight:400;
    color:rgba(42,46,67,1);
    line-height:37px;
 }
 .content-list-content .plot-desc {
    float: left;
    text-align: left;
    text-indent:10px;
    font-size:10px;
    font-family:58;
    font-weight:400;
    /* color:rgba(102,102,102,1); */
    line-height:13px;
 }
 .details-button {
    float: left;
    width:92px;
    height:26px;
    background:rgba(253,168,43,1);
    box-shadow:0px 0px 14px 0px rgba(20,20,20,0.33);
 }
 .details-button {
    font-size:14px;
    font-family:59;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:26px;
  }
  .recommend {
    float: left;
    text-align: center;
    width: 100%;
    height: 120px;
    padding-bottom: 81px;
    /* background-color: #99a9bf; */
  }
  .recommend-content {
    margin: 0 auto;
    width: 490px;
    height: 100%;
  }
  .recommend .title{
    margin: 0 auto;
    height:34px;
    font-size:41px;
    font-family:59;
    font-weight:bold;
    color:rgba(42,46,67,1);
    line-height:49px;
    padding: 30px 0;
}
.recommend .desc {
    text-indent:10px;
    width:490px;
    height:43px;
    font-size:14px;
    font-family:58;
    font-weight:bold;
    color:rgba(102,102,102,1);
    line-height:23px;
}
.plot-introduce {
    width: 100%;
    height: auto;
}
.plot-introduce-first {
    margin: 0 auto;
    float: left;
    width: 100%;
    height: 377px;
    /* background-color: #99a9bf; */
}
.plot-introduce-first .introduce-content-left img{
    float: left;
    width:599px;
    height:377px;
}
.plot-introduce-first .introduce-content-right {
    float: left;
    height: 100%;
}
.introduce-content-right-content {
    margin-left: 38px;
    margin-top: 53px;
}

.introduce-content-right .title {
    width: 300px;
    text-align: left;
    height:27px;
    font-size:20px;
    font-family:59;
    font-weight:400;
    color:rgba(42,46,67,1);
    line-height:37px;
    margin-bottom: 33px;
}
.introduce-content-right .desc {
    text-indent:10px;
    text-align: left;
    width:550px;
    height:170px;
    font-size:18px;
    font-family:58;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:22px;
}
.introduce-content-right .details-button {
    margin-top: 28px;
}
.plot-introduce-second {
    float: left;
    width: 100%;
    height: 387px;
    background: url(../../assets/img/5d1b1e757c009_02.png) no-repeat;
    background-size:100% auto;
}
.plot-introduce-second .introduce-content-left img{
    float: right;
    width:517px;
    height:323px;
}

.plot-introduce-second .introduce-content-right {
    float: right;
    height: 100%;
}
.plot-introduce-second .introduce-content-right .title {
    color:rgba(255,255,255,1);
}
.plot-introduce-second .introduce-content-right-content {
    margin-right: 38px;
}
.my-team {
    width: 100%;
    float: left;
    height: 590px;
}
.my-team .my-team-content {
    display: inline-block;
    width: 90%;
    height: 185px;
    margin: 0 auto;
}
.my-team  .my-team-content-desc {
    float: left;
    width: 100%;
    padding-bottom: 100px;
}

.my-team-content .title {
    margin-top: 61px;
    height:34px;
    font-size:34px;
    font-family:59;
    font-weight:bold;
    color:rgba(42,46,67,1);
    line-height:49px;
}
.my-team-content .desc {
    margin-top: 23px;
    display: inline-block;
    width:490px;
    height:43px;
    font-size:10px;
    font-family:58;
    font-weight:bold;
    line-height:17px;
}
.my-team .my-team-content-li {
    width: 100%;
    float: left;
}
.my-team-content .content {

    float: left;
    width: calc(25% - 20px);
    height: 100px;
    margin-right: 20px;
}
.my-team-content .personal {
    margin: 0 auto;
    width: 200px;
    height: 250px;
}
.my-team-content .personal-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.my-team-content .personal-name {
    width:148px;
    height:37px;
    font-size:21px;
    font-family:59;
    font-weight:bold;
    line-height:37px;
    padding: 10px 0 10px 0;
    text-align: left;
}
.my-team-content .personal-desc {
    width:100%;
    height:36px;
    font-size:10px;
    font-family:58;
    font-weight:400;
    line-height:14px;
    text-align: left;
}
.clear {
    clear: both;
}
</style>
