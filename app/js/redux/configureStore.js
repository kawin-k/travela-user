import { applyMiddleware, compose, createStore } from 'redux'

import epicMiddleware from './middlewares/epicMiddleware'
import loggerMiddleware from './middlewares/loggerMiddleware'
import rootReducer from './reducer'
import rootEpic from './epic'

const middlewares = [epicMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const storeEnhancer = [applyMiddleware(...middlewares)]
const finalCreateStore = composeEnhancers(...storeEnhancer)(createStore)
const configureStore = (initialState) => {
  const store = finalCreateStore(rootReducer, initialState)
  epicMiddleware.run(rootEpic)
  return store
}

export default configureStore
