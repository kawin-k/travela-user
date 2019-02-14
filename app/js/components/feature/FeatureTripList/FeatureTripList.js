import React, { Component } from 'react'
import Slider from "react-slick";
import { CardFeatureTrip } from '../'
import './index.scss'

class FeatureTripList extends Component {
  render() {
    const settings = {
      className: "slider",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    }
    const {
      trips,
    } = this.props

    return (
      <div className="feature-trip-list-container">
        <div className="title">
          Featured Trips
        </div>
        <Slider {...settings}>
          {
            trips.map((trip, index) => (
              <div key={trip.id}>
                <CardFeatureTrip
                  tripName={trip.name}
                  expirationDate={'1 Jan 2020'}
                  location={trip.keywords[0]}
                  point={trip.totalPoint}
                  srcImage={trip.coverPicture} 
                />
              </div>
            ))
          }

        </Slider>
      </div>
    )
  }
}

export default FeatureTripList
