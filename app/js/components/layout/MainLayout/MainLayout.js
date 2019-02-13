import React, { Component } from 'react'
import Header from './Header' 
import Footer from './Footer'
import './index.scss'

class MainLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="main-layout-container">
        <header>
          <Header />
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
