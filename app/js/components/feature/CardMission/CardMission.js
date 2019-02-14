import React, { Component } from 'react'
import { Submission } from '../'
import './index.scss'


class CardMission extends Component {
  render() {
    const {
      missionName = 'mission name',
    } = this.props
    return (
      <div className="card-mission-container">
        <div className="mission-name">
          mission name
        </div>
        <Submission/>
        <Submission/>
      </div>
    )
  }
}

export default CardMission
