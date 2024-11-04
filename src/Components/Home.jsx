import React from 'react'
import { Row,Col } from 'react-bootstrap'
import SideNav from './SideNav'
import Header from './Header'
function Home() {
  return (
    <div >
       <Row>
        <Col sm={2}>
        <SideNav/>
        </Col>
        <Col sm={10}>
         <Row>
            <Header/>
         </Row>
         <Row style={{marginTop:'70px'}}>
            <h1>home page</h1>
         </Row>
        </Col>
       </Row>
    </div>
  )
}

export default Home