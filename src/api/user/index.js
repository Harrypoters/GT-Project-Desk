import api from '../index'
import urls from './urls'

const header = {}

export default {
  login (params) {
    // return出去了一个log
    console.log('url 显示')
    return api.get(urls.login, params, header)
  }
}
