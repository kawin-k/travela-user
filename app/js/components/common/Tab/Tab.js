import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

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
    width: PropTypes.number,
  }

  static defaultProps = {
    width: 320,
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
      background: 'red',
    }

    console.log(underlineStyle)
  
    return (
      <div className="tab-underline-wrapper">
        <div className="tab-underline" style={underlineStyle} />
      </div> 
    )
  }

  renderTabHeader = () => {
    const { children, width }= this.props

    return (
      <div
        className="tvl-tab-header-wrapper"
        style={{ width }}
      >
        {    
          Children.map(children, (child, index) => {
            return (
              <div
                className="tvl-tab-header"
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
