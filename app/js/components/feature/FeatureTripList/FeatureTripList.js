import React, { Component } from 'react'
import Slider from "react-slick";
import { CardFeatureTrip } from '../'
import { Link } from "react-router-dom";
import './index.scss'

class FeatureTripList extends Component {
  render() {
    const settings = {
      className: "slider",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: false,
    };
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
              <div key={index}>
                <Link to={`/trip-detail-${trip.id}`}>
                  <CardFeatureTrip
                    tripName={trip.name}
                    location={trip.keywords[0]}
                    point={trip.totalPoint}
                    srcImage={trip.coverPicture}
                  />
                </Link>
              </div>
            ))
          }

        </Slider>
      </div>
    )
  }
}

export default FeatureTripList
