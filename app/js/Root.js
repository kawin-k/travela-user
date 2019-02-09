import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'

import {
  Home,
} from './pages'

class Root extends Component {
  render() {
    return (
      <Router>
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='*' render={ () => <h1>Page Not Found</h1> } />
            </Switch>
        </BrowserRouter>
      </Router>
    )
  }
}

export default Root
