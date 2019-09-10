import api from '../index'
import urls from './urls'

const header = {}

export default {
  getNewsList (params) {
    // return出去了一个promise
    return api.get(urls.getNewsList, params, header)
  }

}
