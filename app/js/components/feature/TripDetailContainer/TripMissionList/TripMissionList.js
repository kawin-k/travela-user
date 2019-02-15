import React from 'react'
import { CardMission } from '../../'

import './index.scss'

const TripMissionList = ({ missions = [] }) => {
  return (
    <div className="trip-mission-list-wrapper">
    {
      missions.map((mission, index) => (
        <div className="trip-mission-wrapper" key={index}>
          <CardMission mission={mission}/>
        </div>
      ))
    }
    </div>
  )
}

export default TripMissionList