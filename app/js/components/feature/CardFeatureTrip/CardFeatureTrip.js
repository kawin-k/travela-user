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
      expirationDate = '1 Jan 2018',
      location = 'Bangkok',
      point = 2000,
      srcImage = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    } = this.props
    return (
      <div className="card-feature-trip-container">
        <Card>
          <CardImg top src={srcImage} alt="hotel image" />
          <CardBody>
            <div className="point">
              {`${point} point`}
            </div>
            <CardTitle>{tripName}</CardTitle>
            <CardSubtitle>{expirationDate}</CardSubtitle>
            <CardText>{location}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default CardFeatureTrip
