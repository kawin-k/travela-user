import { createEpicMiddleware } from 'redux-observable'

import { callStaticAPI } from '../utils'

const dependencies = {
  callStaticAPI,
}

export default createEpicMiddleware({ dependencies })
