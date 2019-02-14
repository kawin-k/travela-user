import React, { Component } from 'react'
import { MainLayout } from '../../components/layout'
import {
  CardTrip,
  ProgressBar,
  TripDescription,
  TripMissionList,
} from '../../components/feature'
import { ButtonCurve, Tab } from '../../components/common'
import './index.scss'

class TripDetail extends Component {
  render() {
    return (
      <MainLayout>
        <div className="trip-detail-page-container">
          <div className="container">
            <CardTrip />
            <ProgressBar />
            <ButtonCurve disabled={true} className="complete-button">
              Complete Trip
            </ButtonCurve>
            <Tab>
              <Tab.TabContent label="Mission">
                <TripMissionList/>
              </Tab.TabContent>
              <Tab.TabContent label="Detail">
                <TripDescription/>
              </Tab.TabContent>
            </Tab>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default TripDetail