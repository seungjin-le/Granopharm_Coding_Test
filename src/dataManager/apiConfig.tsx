import Axios from 'axios'
import {isEmpty} from 'utils/utility'
import {ApiConfigProps} from 'lodash'

export const HttpMethod = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  // DELETE: "delete",
}

export default class ApiConfig {
  static request({data, query, path, method, url}: ApiConfigProps) {
    try {
      // HTTP Method와 URL이 유효한지 확인.
      if (isEmpty(method) || isEmpty(url)) {
        alert('HTTP Method와 URL을 확인해주세요.')
        return
      }

      // URL에 path 파라미터를 치환.
      if (path) {
        for (const [key, value] of Object.entries(path)) {
          url = url.replace(`:${key}`, value)
        }
      }

      // Query 파라미터를 URL에 추가.
      if (!isEmpty(query)) {
        url +=
          '?' +
          Object.keys(query)
            .map(key => key + '=' + query[key])
            .join('&')
      }

      // API 요청에 필요한 헤더를 설정.
      const headers = {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.REACT_APP_OPENSEA_API_KEY,
      }

      // HTTP Method에 따라 적절한 Axios 요청을 수행.
      switch (method) {
        case HttpMethod.GET:
          return Axios.get(url, {headers: headers})
        case HttpMethod.POST:
          return Axios.post(url, data, {headers: headers})
        case HttpMethod.PATCH:
          return Axios.patch(url, data, {headers: headers})
        case HttpMethod.PUT:
          return Axios.put(url, data, {headers: headers})
        // case HttpMethod.DELETE:
        //   return Axios.delete(url, data, {headers: headers})
        default:
          break
      }
    } catch (message: unknown) {
      alert(message)
    }
  }
}
