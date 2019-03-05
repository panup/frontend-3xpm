import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Switch, Route } from 'reactstrap'

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
      <Switch />
    )
  }
}

export default withRouter((Main))
