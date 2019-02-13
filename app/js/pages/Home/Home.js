import React, { Component } from 'react'

import MainLayout from '../../components/layout/MainLayout'
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
        <MainLayout>
          <h3>Travela</h3>
        </MainLayout>
      </div>
    )
  }
}

export default Home
