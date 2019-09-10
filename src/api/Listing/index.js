import api from '../index'
import urls from './urls'

const header = {}

export default {
  getList (params) {
    console.log('url:' + urls.getList)
    // return出去了一个promise
    return api.get(urls.getList, params, header)
  },
  getBestHomes (params) {
    console.log('url:' + urls.getList)
    // return出去了一个promise
    return api.get(urls.getBestHomes, params, header)
  }

}
