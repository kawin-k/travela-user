import React from 'react'
import { CardMission } from '../../'

import './index.scss'

const TripMissionList = () => {
  return (
    <div className="trip-mission-list-wrapper">
      <CardMission />
      <CardMission />
      <CardMission />
    </div>
  )
}

export default TripMissionList