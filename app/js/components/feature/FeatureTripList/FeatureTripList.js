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
    };
    const {
      tripList = [1, 2, 3, 4],
    } = this.props
    return (
      <div className="feature-trip-list-container">
        <div className="title">
          Featured Trips
        </div>
        <Slider {...settings}>
          {
            tripList.map((trip, index) => (
              <div key={index}>
                <CardFeatureTrip />
              </div>
            ))
          }

        </Slider>
      </div>
    )
  }
}

export default FeatureTripList
