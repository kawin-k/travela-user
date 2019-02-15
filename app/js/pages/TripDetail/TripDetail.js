import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MainLayout } from '../../components/layout'
import {
  CardTrip,
  ProgressBar,
  TripDescription,
  TripMissionList,
} from '../../components/feature'
import { ButtonCurve, Tab } from '../../components/common'
import tripDetailModule from '../../redux/modules/tripDetail'
import './index.scss'

class TripDetail extends Component {
  componentDidMount() {
    const { 
      getTripDetailRequest,
      match
    } = this.props
    this.props.getTripDetailRequest({id: match.params.id})
  }
  render() {
    const {
      tripDetail
    } = this.props
    return (
      <MainLayout>
        <div className="trip-detail-page-container">
          <div className="container">
            <CardTrip
              tripName={tripDetail.name}
              point={tripDetail.totalPoint + tripDetail.extraPoint}
              srcImage={tripDetail.coverPicture} 
            />
            <ProgressBar
              extraPoint={tripDetail.extraPoint}
              missionCount={0}
              missionMax={tripDetail.missionsCount}
            />
            <ButtonCurve disabled={true} className="complete-button">
              Complete Trip
            </ButtonCurve>
            <Tab>
              <Tab.TabContent label="Mission">
                <TripMissionList missions={tripDetail.missions} />
              </Tab.TabContent>
              <Tab.TabContent label="Detail">
                <TripDescription description={tripDetail.detail}/>
              </Tab.TabContent>
            </Tab>
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  tripDetail: tripDetailModule.selector.getTripDetail(state)
})
const mapDispatchToProps = {
  getTripDetailRequest: tripDetailModule.action.getTripDetail.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetail)