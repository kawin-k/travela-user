import { ajax } from 'rxjs/ajax'
import { convertToSnakeCase } from '../../lib/utils/general'

import { getParamsQuery } from './common'

export default ({ url, method, body = {}, headers = { 'Content-Type': 'application/json' } }) => {
  const bodySnakeCase = convertToSnakeCase(body)
  if (method !== 'GET') {
    return ajax({ url, body, method, responseType: 'json', headers, crossDomain: true, })
  }

  const getUrl = url + getParamsQuery(bodySnakeCase)
  return ajax({ url: getUrl, method, responseType: 'json', headers, crossDomain: true, })
}
