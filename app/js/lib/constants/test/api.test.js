import { bindParams } from '../api'

describe('Utils for use in constant/api', () => {
  describe('util: bindParams', () => {
    it('bind params in url', () => {
      const urlWithParams = '/user/:id/shop/:shopId'
      const userId = 'user:123456'
      const shopId = 'shop:xxx'
      const expected = `/user/${userId}/shop/${shopId}`
      const result = bindParams(urlWithParams, {
        id: userId,
        shopId,
        other: 'other:xxx',
      })
      expect(result).toEqual(expected)
    })

    it('work although not send params binding', () => {
      const url = '/user/all'
      expect(bindParams(url)).toEqual(url)
    })
  })
})
