import React, { Component } from 'react'
import { Progress } from 'reactstrap';

import './index.scss'

class ProgressBar extends Component {
  render() {
    const {
      extraPoint = 2000,
      missionCount = 1,
      missionMax = 6
    } = this.props
    return (
      <div className="progress-bar-container">
        <Progress 
          value={missionCount} 
          max={missionMax}
          color="success"
        />
        <div className="content">
          <div className="extra-point">
            {`${extraPoint} extra points`}
          </div>
          <div className="mission">
            {`${missionCount}/${missionMax} Mission`}
          </div>
        </div>
      </div>
    )
  }
}

export default ProgressBar
