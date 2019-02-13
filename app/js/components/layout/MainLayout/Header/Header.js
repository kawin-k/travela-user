import React, { Component, Fragment } from 'react'
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { getUiConfig } from '../../../../lib/constants/firebaseUi'
import './index.scss'

class Header extends Component {
  state = {
    collapsed: true
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  onClickLogout = () => {
    const { onSignOut } = this.props

    this.toggleNavbar()
    
    if (onSignOut) {
      onSignOut()
    }
  }

  renderNavItems = () => {
    const { firebaseApp, isSignedIn } = this.props

    return !isSignedIn
      ? (
        <Fragment>
          <NavItem>
            <NavLink href="/home/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/get-start/">Get start</NavLink>
          </NavItem>
          <NavItem>
            <div className="auth-button-wrapper">
              <StyledFirebaseAuth
                uiConfig={getUiConfig(firebaseApp)}
                firebaseAuth={firebaseApp.auth()}
              />
            </div>
          </NavItem>
        </Fragment>
      )
      : (
        <Fragment>
          <NavItem>
            <NavLink href="/home/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/reward/">Rewards</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ranking/">Ranking</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ranking/">Profile</NavLink>
          </NavItem>
          <NavItem>
            <div className="facebook-logout-btn" onClick={this.onClickLogout}>
              Logout
            </div>
          </NavItem>
        </Fragment>
      )
  }

  render() {
    return (
      <div className="header-container">
        <Navbar color="faded" fixed='top' light style={{ backgroundColor: 'white'}}>
          <NavbarBrand href="/" className="mr-auto">
          <img src="/static/assets/images/logo.png" width="24" height="24" />
            Travela
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              {this.renderNavItems()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
