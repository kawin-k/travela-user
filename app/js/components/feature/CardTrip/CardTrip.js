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

class CardTrip extends Component {
  render() {
    const {
      tripName = 'trip name',
      point = 2000,
      srcImage = "https://lovinlife.com/wp-content/uploads/2019/01/monument-valley-road-trip-RTTIPS0617-696x435.jpg",
    } = this.props
    return (
      <div className="card-trip-container">
        <Card>
        <div className="card-image" style={{backgroundImage: `url('${srcImage}')`}}/>
          <CardBody>
            <CardTitle>{tripName}</CardTitle>
            <div className="point">
              {`${point} point`}
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default CardTrip
