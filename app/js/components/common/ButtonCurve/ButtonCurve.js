import React, { Component } from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.scss'

class ButtonCurve extends Component {
  render() {
    const { children, disabled = false, className } = this.props
    return (
      <div className={classNames("button-curve", className)}>
        <Button color="primary" disabled={disabled}>{children}</Button>
      </div>
    )
  }
}

export default ButtonCurve
