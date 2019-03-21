import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'

import HomePage from '../HomePage'

import './main.scss'

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Container tag='main' fluid className='pt-3 mt-5'>
          {this.getRouter()}
        </Container>
      </div>
    )
  }

  getRouter() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
      </Switch>
    )
  }
}

const mapStateToProps = function({ router, whoAmI }) {
  console.log('router', router)
  return {
    router: router
  }
}

export default connect(mapStateToProps)(Main)
