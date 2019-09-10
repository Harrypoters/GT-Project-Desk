import api from '../index'
import urls from './urls'

const header = {}

export default {
  getServiceList (params) {
    console.log('url:' + urls.getServiceList)
    // return出去了一个promise
    return api.get(urls.getServiceList, params, header)
  }

}
