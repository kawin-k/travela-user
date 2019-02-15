import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { MainLayout } from '../../components/layout'
import { LocationVerification, PhotoVerification} from '../../components/feature'
import './index.scss'

class MissionVerification extends Component {
  componentDidMount() {
    const { 
      match,
    } = this.props
    
  }
  render() {
    return (
      <MainLayout>
        <div className="mission-verification-page-container">
          <div className="container">
            <div className="mission-name">
              On the Train !!!!
            </div>
            <div className="point">
              500 Points
            </div>
            <div style={{
              padding: '10px 0 0 10px',
              color: '#445fba',
            }}>
              Check-in at Hua Lum Pong statation.
            </div>
            <LocationVerification
              checkInLocation={{lat: 13.7391976, lng: 100.5227214}}
            />
            <div style={{
              padding: '20px 0 0 10px',
              color: '#445fba',
            }}>
              Take photo for your ticket.
            </div>
            <PhotoVerification />
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionVerification)
