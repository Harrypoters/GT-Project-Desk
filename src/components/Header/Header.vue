<template>
    <div>
        <el-row class="top">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                  <div class="contact-msg">
                    <ul>
                      <li><i class="iconfont icon-lianxi"></i>联系客服</li>
                      <li><i class="iconfont icon-guanzhuwomen"></i>关注我们</li>
                    </ul>
                  </div>
              </div>
            </el-col>
        </el-row>
        <div class="header-menu">
            <div class="logo">
                <img src="../../assets/logo.png">
            </div>
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#ae251b"
            text-color="#fff"
            menu-trigger="hover"
            :router="true"
            active-text-color="#2c3e50">
            <el-menu-item index="/" class="menu-first">首页
            </el-menu-item>
            <el-menu-item index="/news/index" class="menu-first">新闻动态
            </el-menu-item>
            <el-menu-item index="/service/index">服务介绍
            </el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">
                  <span class="menu-first">联系我们</span>
                </template>
                <el-menu-item index="/introduction/index">公司简介</el-menu-item>
                <!-- <el-menu-item index="/recruitment/index">人才招聘</el-menu-item> -->
              </el-submenu>
            </el-menu>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .top .contact-msg {
    float: right;
    padding-right: 80px;
    width: 500px;
    height: 100%;
  }
  .top .contact-msg ul {
    float: right;
    line-height: 0px;
  }
  .top .contact-msg ul li {
    float: right;
    font-size: 10px;
    padding-left: 30px;
  }
  .top .contact-msg ul li i{
    padding-right: 8px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #ffffff;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .header-menu {
    width: 100%;
    height: 61px;
    background-color: #ae251b;
    box-shadow: 1px 6px 8px 6px #E0E0E5;
  }
  .header-menu .logo {
    height: 60px;
    float: left;
    padding-left: 80px;
  }
  .header-menu a {
    text-decoration: none;
  }
  .header-menu ul {
    float: right;
    padding-right: 120px;
  }
  .header-menu ul li {
    padding: 0 0;
  }
  .el-menu--horizontal>.el-menu-item, .el-menu--horizontal>.el-submenu .el-submenu__title {
    font-size: 18px;
    padding: 0 20px 0 20px;
  }
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    font-size: 15px;
  }

</style>
