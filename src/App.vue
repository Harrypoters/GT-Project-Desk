<template>
  <div id="app">
      <router-view></router-view>
      <el-tooltip placement="top" content="回到顶部">
          <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
        </el-tooltip>
  </div>
</template>

<script>
import BackToTop from '@/components/Header/BackToTop'
export default {
  name: 'App',

  data () {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        lineHeight: '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1'// 按钮的背景颜色
      }
    }
  },
  components: {
    BackToTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body {
  min-width: 1300px;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
</style>
