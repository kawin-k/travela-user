import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { MainLayout } from '../../components/layout'
import { ButtonCurve } from '../../components/common'
import './index.scss'

import { PhotoVerification } from '../../components/feature'

class Home extends Component {  
  render() {
    return (
      <MainLayout>
        <PhotoVerification />
        <div className="home-page-container">
          <div className="container">
            <div className="main-title">
              Travel less<br />
              Experience more<br />
            </div>
            <div className="sub-title">
              Make every trip in Thailand meaningful with TRAVELA. Get adventurous and complete missions given to you in your travel destination.
            </div>
            <img className="main-image" src="/static/assets/images/home-cover-01.png" />
            <Link to="/trips">
              <ButtonCurve className="get-start-button">Get started</ButtonCurve>
            </Link>
            <div className="how-to-title">
              How to play
            </div>
            <div className="how-to-no-1">
              1. Choose your travel destination
            </div>
            <img className="how-to-no-1-image" src="/static/assets/images/home-cover-02.png" />
            <div className="how-to-no-2">
              2. Complete mission
            </div>
            <img className="how-to-no-2-image" src="/static/assets/images/home-cover-03.png" />
            <div className="how-to-no-3">
              3. Level Up &amp; Earn Rewards
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

export default Home
