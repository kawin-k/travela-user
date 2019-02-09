import makeActionCreator from '../makeActionCreator'

describe('util: makeActionCreator', () => {
  it('can make actionCreator', () => {
    const actionCreator = makeActionCreator('TEST_ACTION', 'param1', 'param2')
    const action = actionCreator('a', 1)
    const expectAction = {
      type: 'TEST_ACTION',
      param1: 'a',
      param2: 1,
    }

    expect(action).toEqual(expectAction)
  })
})
