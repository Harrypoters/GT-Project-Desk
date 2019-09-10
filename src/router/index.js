import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News/index'
import Home from '@/components/Home/index'
import Service from '@/components/Service/index'
import Introduction from '@/components/Contact/Introduction'
import Recruitment from '@/components/Contact/Recruitment'

Vue.use(Router)

export default new Router({
  // 去掉#号
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news/index',
      name: 'News',
      component: News
    },
    {
      path: '/service/index',
      name: 'Service',
      component: Service
    },
    {
      path: '/introduction/index',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/recruitment/index',
      name: 'Recruitment',
      component: Recruitment
    }
  ]
})
