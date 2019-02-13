import React, { Component } from 'react'

import { Tab } from '../../components/common'
import { PillFilterList } from '../../components/feature'
import './index.scss'

class Home extends Component {
  handlerOnSelectPillFilterList = (filterName) => {
    console.log('filterName', filterName)
  }

  render() {
    return (
      <div className="home-page-container">
        HelloWorld
        <PillFilterList
          handlerOnSelectPill={this.handlerOnSelectPillFilterList}
          optionList={['Bangkok', 'Chiang Mai']}
          // optionList={['Bangkok', 'Chiang Mai', 'Chiang Rai', 'Nan']}
        />
        <Tab>
          <Tab.TabContent label="Missions">
            <div>mission container</div>
          </Tab.TabContent>
          <Tab.TabContent label="Details">
            <div>detail container</div>
          </Tab.TabContent>
        </Tab>
      </div>
    )
  }
}

export default Home
