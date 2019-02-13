import React, { Component, Fragment } from 'react'

import firebaseApp from '../../../services/firebase'
import Header from './Header' 
import Footer from './Footer'
import './index.scss'

class MainLayout extends Component {
  state = {
    isSignedIn: false,
    userDetail: null,
  }

  componentDidMount() {
    // create auth observer
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged(
      (user) => this.setState({
        isSignedIn: !!user,
        userDetail: user,
      })
    )
  }

  onSignOut = () => {
    firebaseApp.auth().signOut()
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const { isSignedIn } = this.state
    const { children } = this.props

    return (
      <div className="main-layout-container">
        <header>
          <Header
            firebaseApp={firebaseApp}
            isSignedIn={isSignedIn}
            onSignOut={this.onSignOut}
          />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default MainLayout
