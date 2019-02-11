import React, { Component } from 'react'

import { Tab } from '../../components/common'
import './index.scss'

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        HelloWorld
        <Tab>
          <Tab.TabContent label="Missions">
            <div>mission container</div>
          </Tab.TabContent>
          <Tab.TabContent label="Details">
            <div>detail container</div>
          </Tab.TabContent>
        </Tab>
      <div className="home-page-container">
        Home page
      </div>
    )
  }
}

export default Home
