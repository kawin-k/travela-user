import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import Root from './Root'
import configureStore from './redux/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss'

const store = configureStore()
const rootEl = document.getElementById('app')

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootEl
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default // eslint-disable-line global-require
    renderApp(NextRoot)
  })
}
