import api from '../index'
import urls from './urls'

const header = {}

export default {
  getBannerList (params) {
    console.log('url:' + urls.getBannerList)
    // return出去了一个promise
    return api.get(urls.getBannerList, params, header)
  }

}
