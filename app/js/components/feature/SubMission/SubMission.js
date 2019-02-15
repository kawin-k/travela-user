import React, { Component } from 'react'
import classnames from 'classnames'
import './index.scss'

class SubMission extends Component {
  render() {
    const {
      objective = 'Objective sub mission',
      point = 999,
      status = 'pass'
    } = this.props
    return (
      <div className="sub-mission-container">
        <div className={classnames("status-circle", {
          wait: status === 'wait',
          fail: status === 'fail',
          pass: status === 'pass',
        })} />
        <div className="description">
          <div className={classnames("objective", {
            wait: status === 'wait',
            fail: status === 'fail',
            pass: status === 'pass',
          })}>{objective}</div>
          <div className="point">{`${point} Points`}</div>
        </div>
      </div>
    )
  }
}

export default SubMission
