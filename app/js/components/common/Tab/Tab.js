import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.scss'

const TabContent = ({ children, label, ...props }) => {
  return (
    <div className="tvl-tab-content-wrapper">
      {children}
    </div>
  )
}

class Tab extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,
  }

  state = {
    selectedIndex: 0,
  }

  onSelectTab = (index) => {
    this.setState({
      selectedIndex: index
    })
  }

  renderTabHeaderUnderline = () => {
    const { selectedIndex } = this.state
    const { children } = this.props
    const underlineStyle = {
      transform: `translateX(${100 * selectedIndex}%)`,
      width: `calc(100% / ${children.length})`,
      backgroundColor: '#becad6',
    }
  
    return (
      <div className="tab-underline-wrapper">
        <div className="tab-underline" style={underlineStyle} />
      </div> 
    )
  }

  renderTabHeader = () => {
    const { children, width } = this.props
    const { selectedIndex } = this.state

    return (
      <div
        className="tvl-tab-header-wrapper"
      >
        {    
          Children.map(children, (child, index) => {
            const isSelected = index === selectedIndex

            return (
              <div
                className={classNames(
                  'tvl-tab-header',
                  { active: isSelected }
                )}
                onClick={() => this.onSelectTab(index)}
              >
                {child.props.label}
              </div>
            )
          })
        }
        {this.renderTabHeaderUnderline()}
      </div>
    )
  }

  renderTabContent = () => {
    const { selectedIndex } = this.state
    const { children } = this.props

    return children[selectedIndex]
  }

  render() {
    return (
      <div className="tvl-tab">
        {this.renderTabHeader()}
        {this.renderTabContent()}
      </div>
    )
  }
}

Tab.TabContent = TabContent
export default Tab
