import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

import './index.scss'

class CardFeatureTrip extends Component {
  render() {
    const {
      tripName = 'trip name',
      location = 'Bangkok',
      point = 2000,
      srcImage = "https://lovinlife.com/wp-content/uploads/2019/01/monument-valley-road-trip-RTTIPS0617-696x435.jpg",
    } = this.props
    return (
      <div className="card-feature-trip-container">
        <Card>
          <div className="card-image" style={{backgroundImage: `url('${srcImage}')`}}/>
          <CardBody>
            <div className="point">
              {`${point} point`}
            </div>
            <CardTitle>{tripName}</CardTitle>
            <CardText>{location}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default CardFeatureTrip
