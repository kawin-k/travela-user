import React, { Component, Fragment } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from "react-router-dom";
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
          <Link to="/">
            <NavItem>
              Home
            </NavItem>
          </Link>
          <Link to="/trips">
            <NavItem>
              Get start
            </NavItem>
          </Link>
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
          <Link to="/">
            <NavItem>
              Home
            </NavItem>
          </Link>
          <Link to="/trips">
            <NavItem>
              Get start
            </NavItem>
          </Link>
          <Link to="/reward">
            <NavItem>
              Rewards
            </NavItem>
          </Link>
          <Link to="/profile">
            <NavItem>
              Profile
            </NavItem>
          </Link>
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
        <Navbar color="faded" fixed='top' light style={{ backgroundColor: 'white' }}>
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
