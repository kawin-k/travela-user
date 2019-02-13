import React, { Component } from 'react'

import './index.scss'

class Footer extends Component {

  render() {
    return (
      <div className="footer-container">
        <img className="footer-logo" src="/static/assets/images/footer-logo.png" />
        <img className="footer-share" src="/static/assets/images/footer-share.png" />
        <div className="footer-copyright">
          Copyright @ 2019 Travela. All RightsReserved.
        </div>
      </div>
    )
  }
}

export default Footer
