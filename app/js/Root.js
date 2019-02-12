import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'

import {
  Home,
  Login,
  MedalList,
  MissionVerification,
  Profile,
  Reward,
  TripDetail,
  Trips,
} from './pages'

class Root extends Component {
  render() {
    return (
      <Router>
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/login' exact component={ Login } />
              <Route path='/medal-list' exact component={ MedalList } />
              <Route path='/mission-verification' exact component={ MissionVerification } />
              <Route path='/profile' exact component={ Profile } />
              <Route path='/reward' exact component={ Reward } />
              <Route path='/trip-detail' exact component={ TripDetail } />
              <Route path='/trips' exact component={ Trips } />
              <Route path='*' render={ () => <h1>Page Not Found</h1> } />
            </Switch>
        </BrowserRouter>
      </Router>
    )
  }
}

export default Root
