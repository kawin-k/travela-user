import React, { Component } from 'react'
import { MainLayout } from '../../components/layout'
import { FeatureTripList, CardTrip} from '../../components/feature'
import './index.scss'

class Trips extends Component {
  render() {
    return (
      <MainLayout>
        <div className="trips-page-container">
          <div className="container">
            <div className="main-title">
              Choose your Trip
            </div>
            <FeatureTripList />
            <CardTrip />
            <CardTrip />
            <CardTrip />
            <CardTrip />
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Trips