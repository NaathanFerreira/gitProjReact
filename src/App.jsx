import React from 'react'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Header from './layout/Header'

import './app.css'

export default props => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}