import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.scss'

class PillFilterList extends Component {
  static propTypes = {
    optionList: PropTypes.array.isRequired,
    handlerOnSelectPill: PropTypes.func.isRequired,
  }

  state = {
    selectedIndex: -1
  }

  onSelectPill = (index) => {
    const { selectedIndex: curSelectedIndex } = this.state
    const selectedIndex = curSelectedIndex === index ? -1 : index

    this.setState({
      selectedIndex,
    })

    const { handlerOnSelectPill, optionList } = this.props 

    if (handlerOnSelectPill) {
      const valueForCallBack = selectedIndex === -1
        ? ''
        : optionList[selectedIndex]

      handlerOnSelectPill(valueForCallBack)
    }
  }

  renderPillList = () => {
    const { selectedIndex } = this.state
    const { optionList } = this.props

    return (
      optionList.map((option, index) => {
        const isSelected = selectedIndex == index
        
        return (
          <div
            className={classNames(
              'pill-filter-option-wrapper',
              { active: isSelected }
            )}
            onClick={() => this.onSelectPill(index)}
            key={index}
          >
            {option}
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="pill-filter-list-container">
        {this.renderPillList()}
      </div>
    )
  }
}

export default PillFilterList
