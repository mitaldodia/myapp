import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faHeartPulse, faHeadphones } from '@fortawesome/free-solid-svg-icons';



export default function Counter() {
  return (
    <div>
         <div className="counter-details">
            <div className="overlay-bg"></div> 
            <div className="counter-contain">
                <Container>
                    <Row>
                        <Col sm={12} md={3}>
                            <div className="counter-all">
                                <FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon>
                                <h2>90</h2>
                                <p>Companies consulted</p>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className="counter-all">
                                <FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon>
                                <h2>180</h2>
                                <p>Consultants</p>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className="counter-all">
                                <FontAwesomeIcon icon={ faHeadphones }></FontAwesomeIcon>
                                <h2>50</h2>
                                <p>Awards Winning</p>
                            </div>
                          
                        </Col>
                        <Col sm={12} md={3}>
                            <div className="counter-all">
                                <FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon>
                                <h2>280</h2>
                                <p>Satisfied Customers</p>
                            </div>
                        </Col>
                    </Row>
                </Container>  
            </div>
        </div>
    </div>
  )
}

