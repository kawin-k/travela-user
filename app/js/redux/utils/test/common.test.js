import {
  getParamsQuery
} from '../common'

describe('util: common', () => {
  describe('getParamsQuery', () => {
    it('can change params object to query string', () => {
      const params = {
        q: 'aaa',
        atTime: 1,
      }

      const query = getParamsQuery(params)
      expect(query).toEqual('?q=aaa&atTime=1')
    })
  })
})
