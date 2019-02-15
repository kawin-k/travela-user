import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MainLayout } from '../../components/layout'
import { OnGoingTripList } from '../../components/feature'

import userDetailModule from '../../redux/modules/userDetail'
import './index.scss'

class Profile extends Component {
  renderLevel = () => {
    return (
      <div className="user-profile-level">
        <label>Level 1</label>
      </div>
    ) 
  }

  renderTravelValue = (value, unit) => {
    return (
      <div className="user-travel-value">
        <div className="travel-value">{value}</div>
        <div className="travel-unit">{unit}</div>
      </div>
    )
  }

  render() {
    const { userDetail, trips = [] } = this.props

    if (!userDetail) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <MainLayout>
        <div className="profile-page-container">
          <div className="user-profile-wrapper">
            <div className="user-profile-photo-wrapper">
              <img
                className="user-profile-photo"
                src={userDetail.photoURL}
              />
            </div>
            <div className="user-profile-detail">
              <h4>{userDetail.displayName}</h4>
              <label>Bangkok, Thailand</label>
              { this.renderLevel() }
            </div>
          </div>
          <div className="user-travel-value-wrapper">
            {this.renderTravelValue('100', 'Points')}
            {this.renderTravelValue('1', 'Trip')}
            {this.renderTravelValue('1', 'Mission')}
          </div>
        </div>
        <div className="user-on-going-trip">
          <div className="user-on-going-trip-header">
            On goingTrips
          </div>
          {
            !trips.length
              ? (
                <label>
                  No completed trip
                </label>
              )
              : (<OnGoingTripList trips={trips}/>)
          }
        </div>
        <div className="user-completed-trip">
          <div className="user-completed-trip-header">
            Completed Trips
          </div>
          <label>
            No completed trip
          </label>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = state => ({
  userDetail: userDetailModule.selector.getUserDetail(state),
})

export default connect(mapStateToProps, null)(Profile)
