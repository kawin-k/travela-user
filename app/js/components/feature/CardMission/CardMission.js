import React, { Component } from 'react'
import _ from 'lodash'
import { Submission } from '../'
import './index.scss'


class CardMission extends Component {
  render() {
    const {
      mission
    } = this.props
    return (
      <div className="card-mission-container">
        <div className="mission-name">
          {mission.name}
        </div>
        {
          !_.isEmpty(mission.checkIn) && 
          <Submission 
            objective={mission.checkIn.objective}
            point={mission.checkIn.point}
            status={'init'}
          />
        }
        {
          !_.isEmpty(mission.photo) && 
          <Submission 
            objective={mission.photo.objective}
            point={mission.photo.point}
            status={'init'}
          />
        }
      </div>
    )
  }
}

export default CardMission
