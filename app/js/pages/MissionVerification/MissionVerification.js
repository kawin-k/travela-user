import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { MainLayout } from '../../components/layout'
import { LocationVerification, PhotoVerification} from '../../components/feature'
import tripDetailModule from '../../redux/modules/tripDetail'
import './index.scss'

class MissionVerification extends Component {
  componentDidMount() {
    const { 
      getTripDetailRequest,
      match,
      tripDetail,
    } = this.props
    this.missionId = match.params.mid
    getTripDetailRequest({id: match.params.tid})
    
  }
  componentDidUpdate(prevProps) {
    const { 
      isLoading,
      tripDetail,
    } = this.props
    if (prevProps.isLoading !== isLoading && !isLoading) {
      this.missionData = _.find(tripDetail.missions, {id: this.missionId})
      this.forceUpdate()
    }
  }
  render() {
    const {
      tripDetail
    } = this.props
    return (
      <MainLayout>
        <div className="mission-verification-page-container">
          <div className="container">
            <div className="mission-name">
              {_.get(this.missionData, 'name', 'mission name')}
            </div>
            <div className="point">
              {_.get(this.missionData, 'checkIn.point', 0) + _.get(this.missionData, 'photo.point', 0)}
            </div>
            <LocationVerification />
            <PhotoVerification />
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  tripDetail: tripDetailModule.selector.getTripDetail(state),
  isLoading: tripDetailModule.selector.getLoading(state)
})
const mapDispatchToProps = {
  getTripDetailRequest: tripDetailModule.action.getTripDetail.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionVerification)
