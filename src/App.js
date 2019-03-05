import React, { Component } from 'react'
import Sidebar from './components/Sidebar/Sidebar.js'
import ContentTemplate from './components/ContentTemplate.js'
import Helmet from 'react-helmet'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Helmet>
          <title>3xPM</title>
        </Helmet>
        <Sidebar />
        <div className='content-wrapper'>
          <ContentTemplate />
        </div>
      </div>
    )
  }
}

export default App
