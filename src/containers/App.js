import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from './Main'
import { ConnectedRouter } from 'connected-react-router'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div className='App'>
            <Helmet>
              <title>3xPM</title>
            </Helmet>
            <Sidebar />
            <Main />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App
