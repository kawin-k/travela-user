import React, { Component } from 'react'
import { connect } from 'react-redux'

import pingModule from '../../../redux/modules/ping'

class Ping extends Component {
  render() {
    const {
      isPing,
      doPing,
    } = this.props
    return (
      <div>
        <p>Ping: {isPing ? 'true' : 'false'}</p>
        <button onClick={doPing}>Ping !!!</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isPing: pingModule.selector.getPingStatus(state),
})

const mapDispatchToProps = {
  doPing: pingModule.action.doPing,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ping)
