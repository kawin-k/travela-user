import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MainLayout } from '../../components/layout'
import { FeatureTripList, CardTrip, PillFilterList} from '../../components/feature'
import tripsModule from '../../redux/modules/trips'
import './index.scss'

const keywordList = ['Bangkok', 'Chiang Mai']

class Trips extends Component {
  componentDidMount() {
    this.props.getTripsRequest()
  }

  renderCardTrip = (keyword) => {
    const { trips } = this.props
    if (!trips.length) return

    const filteredTrips = trips.filter(trip => keyword === trip.keywords[0])
    
    return (
      <div className="card-trip-list">
        <h3 className="trip-keyword">{keyword}</h3>
        {
          filteredTrips.map(trip => (      
            <CardTrip
              key={trip.id}
              tripName={trip.name}
              point={trip.totalPoint}
              srcImage={trip.coverPicture}
            />
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <MainLayout>
        <div className="trips-page-container">
          <div className="container">
            <div className="main-title">
              Choose your Trip
            </div>
            <FeatureTripList trips={this.props.trips}/>
            <PillFilterList
              defaultSelect={keywordList}
              optionList={keywordList}
            >
              {this.renderCardTrip(keywordList[0])}
              {this.renderCardTrip(keywordList[1])}
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
