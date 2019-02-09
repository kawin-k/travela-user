import makeCallAPIAction from '../makeCallAPIAction'

describe('util: makeCallAPIAction', () => {
  it('can make request success failure actions', () => {
    const TEST_ACTION = makeCallAPIAction('TEST_ACTION')
    expect(TEST_ACTION).toEqual({
      REQUEST: 'TEST_ACTION_REQUEST',
      SUCCESS: 'TEST_ACTION_SUCCESS',
      FAILURE: 'TEST_ACTION_FAILURE'
    })
  })
})
