import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MainLayout } from '../../components/layout'
import { FeatureTripList, CardTrip, PillFilterList} from '../../components/feature'
import tripsModule from '../../redux/modules/trips'
import './index.scss'

class Trips extends Component {
  componentDidMount() {
    this.props.getTripsRequest()
  }
  render() {
    console.log(this.props.trips)
    return (
      <MainLayout>
        <div className="trips-page-container">
          <div className="container">
            <div className="main-title">
              Choose your Trip
            </div>
            <FeatureTripList trips={this.props.trips}/>
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

const mapStateToProps = (state) => ({
  trips: tripsModule.selector.getTrips(state)
})
const mapDispatchToProps = {
  getTripsRequest: tripsModule.action.getTrips.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
