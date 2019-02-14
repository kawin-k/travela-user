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
      srcImage = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    } = this.props
    return (
      <div className="card-trip-container">
        <Card>
          <CardImg top src={srcImage} alt="hotel image" />
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
