import React, { Component } from 'react'
import { Row, Col, Label } from 'reactstrap'
import Helmet from 'react-helmet'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Helmet>
            <title>3xPM - Home</title>
          </Helmet>
          <Col>
            <Label>TESTI</Label>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomePage
