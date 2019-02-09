import React, { Component } from 'react'

import { HelloWorld } from '../../components/common'
import { Ping } from '../../components/feature'

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <HelloWorld />
        <Ping />
      </div>
    )
  }
}

export default Home
