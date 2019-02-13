import React, { Component } from 'react'
import { MainLayout } from '../../components/layout'
import './index.scss'

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <div className="home-page-container">
          Home
        </div>
      </MainLayout>
    )
  }
}

export default Home
