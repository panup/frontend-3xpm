import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import HomePage from '../HomePage'

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
        <Route path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
      </Switch>
    )
  }
}

export default Main
