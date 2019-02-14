import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { GOOGLE_MAP_API } from '../../../lib/constants/googleMapApi'
import './index.scss'

const MyMapComponent = compose(
  withProps({
    googleMapURL: GOOGLE_MAP_API,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px`, borderRadius: `4px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={props.currentLocation}
      center={props.currentLocation}
      defaultOptions={{
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        // zoomControl: false,
        rotateControl: false,
        fullscreenControl: false
      }}
      disableDefaultUI
    >
      {props.isMarkerShown && (
        <Fragment>
          <Marker
            icon={{
              url: '/static/assets/images/current-position.png',
              scaledSize: new google.maps.Size(24, 24),
            }}
            position={props.currentLocation}
          />
          <Marker
            icon={{
              url: '/static/assets/images/marker-flag.png',
              scaledSize: new google.maps.Size(48, 48),
              // origin: new google.maps.Point(0, 0),
              // anchor: new google.maps.Point(0, 0)
            }}
            position={props.checkInLocation}
          />
        </Fragment>
      )}
    </GoogleMap>
  )
})

class LocationVerification extends Component {
  static propTypes = {
    checkInLocation: PropTypes.object,
  }

  static defaultProps = {
    checkInLocation: { lat: 13.739456, lng: 100.557363 },
  }

  state = {
    isMarkerShown: false,
    currentLocation: { lat: 0, lng: 0}
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  componentDidUpdate() {
    this.getGeoLocation()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.getGeoLocation()
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          // const { currentLocation: { lat, lng} } = this.state
          const { currentLocation } = this.state
          const { coords: { latitude, longitude } } = position

          // if ((lat !== latitude) || (lng !== longitude)) {
            this.setState(prevState => ({
              currentLocation: {
                ...prevState.currentLocation,
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            }))
          // }
        }
      )
    }
  }

  onClickCheckIn = () => {
    const { currentLocation } = this.state
  }

  render() {
    const { isMarkerShown, currentLocation } = this.state
    const { checkInLocation } = this.props

    return (
      <div className="location-verification-container">
        <div className="google-map-wrapper">
          {
            currentLocation
              ? (
                <MyMapComponent
                  isCircle
                  isMarkerShown={isMarkerShown}
                  onMarkerClick={this.handleMarkerClick}
                  currentLocation={currentLocation}
                  checkInLocation={checkInLocation}
                />
              )
              : (
                <div>loading...</div>
              )
          }
        </div>
        <div className="location-check-in">
          <Button onClick={this.onClickCheckIn} disabled={!currentLocation}>Check in</Button>
        </div>
      </div>
    )
  }
}

export default LocationVerification
