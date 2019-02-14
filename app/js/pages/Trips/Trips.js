import React, { Component } from 'react'
import { MainLayout } from '../../components/layout'
import { FeatureTripList, CardTrip, PillFilterList} from '../../components/feature'
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
            <PillFilterList
              optionList={['Bangkok', 'Chiang Mai']}
            >
              <div>
                <h3>Bangkok</h3>
                <CardTrip />
                <CardTrip />
              </div>
              <div>
                <h3>Chiang Mai</h3>
                <CardTrip />
                <CardTrip />
              </div>
            </PillFilterList>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Trips