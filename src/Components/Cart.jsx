import React from 'react'
import { Row,Col } from 'react-bootstrap'
import SideNav from './SideNav'
import Header from './Header'
function Cart() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <SideNav/>
        </Col>
        <Col>
        <Row>
            <Header/>
        </Row>
        <Row  style={{marginTop:'70px'}}>
        <h1>cart page</h1>
        </Row>
        </Col>
       
      </Row>
    </div>
  )
}

export default Cart