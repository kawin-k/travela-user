import React, { Component } from 'react'
import _ from 'lodash'
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
import userDetailModule from '../../redux/modules/userDetail'
import addMyTripModule from '../../redux/modules/addMyTrip'
import './index.scss'

class TripDetail extends Component {
  componentDidMount() {
    const {
      getTripDetailRequest,
      addMyTripRequest,
      match,
      userDetail,
    } = this.props
    getTripDetailRequest({ id: match.params.tid, uid: userDetail.uid })
  }
  componentDidUpdate(prevProps) {
    const { 
      getTripDetailRequest,
      isLoadingAddMyTrip,
      userDetail,
      match
    } = this.props
    if (prevProps.isLoadingAddMyTrip !== isLoadingAddMyTrip && !isLoadingAddMyTrip) {
      alert("Your mission has begun");
      setTimeout(() => {
        getTripDetailRequest({ id: match.params.tid, uid: userDetail.uid })
      }, 1500)
    }
  }
  render() {
    const {
      tripDetail,
      userDetail,
      match,
    } = this.props

    const isLogin = false
    const isJoin = true
    return (
      <MainLayout>
        <div className="trip-detail-page-container">
          <div className="container">
            <CardTrip
              tripName={tripDetail.name}
              point={tripDetail.totalPoint + tripDetail.extraPoint}
              srcImage={tripDetail.coverPicture}
            />
            {
              tripDetail.isJoin && <ProgressBar
                extraPoint={tripDetail.extraPoint}
                missionCount={0}
                missionMax={tripDetail.missionsCount}
              />
            }
            {
              tripDetail.isJoin ?
              <ButtonCurve disabled={true} className="complete-button">
                Complete Trip
              </ButtonCurve> :
              <ButtonCurve onClick={() => { 
                this.props.addMyTripRequest({tid: match.params.tid, uid: userDetail.uid})
                }} 
                disabled={!userDetail}
                className="start-button"
              >
                Start
              </ButtonCurve>
            }
            <Tab>
              <Tab.TabContent label="Mission">
                <TripMissionList missions={tripDetail.missions} />
              </Tab.TabContent>
              <Tab.TabContent label="Detail">
                <TripDescription description={tripDetail.detail} />
              </Tab.TabContent>
            </Tab>
          </div>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  tripDetail: tripDetailModule.selector.getTripDetail(state),
  userDetail: userDetailModule.selector.getUserDetail(state),
  isLoadingAddMyTrip: addMyTripModule.selector.getLoading(state),
})

const mapDispatchToProps = {
  getTripDetailRequest: tripDetailModule.action.getTripDetail.request,
  addMyTripRequest: addMyTripModule.action.addMyTrip.request
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetail)