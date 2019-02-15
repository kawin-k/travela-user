import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/trip-detail-:tid' component={TripDetail} />
          <Route path='/login' exact component={Login} />
          <Route path='/medal-list' exact component={MedalList} />
          <Route path='/mission-verification-:tid-:mid' exact component={MissionVerification} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/reward' exact component={Reward} />
          <Route path='/trips' exact component={Trips} />
          <Route path='*' render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </Router>
    )
  }
}

export default Root
