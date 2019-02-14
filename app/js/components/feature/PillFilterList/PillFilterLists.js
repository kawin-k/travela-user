import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.scss'

class PillFilterList extends Component {
  static propTypes = {
    defaultSelect: PropTypes.array,
    optionList: PropTypes.array.isRequired,
    handlerOnSelectPill: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
    ]).isRequired
  }

  static defaultProps = {
    defaultSelect: [],
  }

  state = {
    selected: [...this.props.defaultSelect]
  }

  onSelectPill = (val) => {
    const { selected: curSelected } = this.state
    const selected = curSelected.includes(val)
      ? curSelected.filter(selected => selected !== val)
      : [...curSelected, val]

    this.setState({
      selected,
    })

    // const { handlerOnSelectPill, optionList } = this.props 

    // if (handlerOnSelectPill) {
    //   const valueForCallBack = selected === -1
    //     ? ''
    //     : optionList[selected]

    //   handlerOnSelectPill(valueForCallBack)
    // }
  }

  renderPillList = () => {
    const { selected } = this.state
    const { optionList } = this.props

    return (
      <div className="pill-filter-header-wrapper">
        {
          optionList.map((option, index) => {
            const isSelected = selected.includes(option)
            
            return (
              <div
                className={classNames(
                  'pill-filter-option',
                  { active: isSelected }
                )}
                onClick={() => this.onSelectPill(option)}
                key={index}
              >
                {option}
              </div>
            )
          })
        }
      </div>
    )
  }

  renderContent = () => {
    const { children, optionList } = this.props
    const { selected } = this.state
    
    if (!selected.length) return

    return (
      <div className="pill-filter-content-wrapper">
        {
          selected.length === optionList.length
            ? children
            : children[optionList.indexOf(selected[0])]
        }
      </div>
    )
  }

  render() {
    return (
      <div className="pill-filter-list-container">
        {this.renderPillList()}
        {this.renderContent()}
      </div>
    )
  }
}

export default PillFilterList
