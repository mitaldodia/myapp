import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Buttons from '../share-components/Button';


export default function Request() {
  return (
    <div>
        <div className="rquest-contains">
            <div className="overlay-bg"></div>
            <Container>
                <div className="request-details">
                    <div className="request-title">
                        <h2>Request a call back.</h2>
                        Would you like to speak to one of our financial advisers? Just submit your contact details and we’ll be <br/>
                        in touch shortly.
                         You can also email us if you prefer that type of communication.
                    </div>
                    <div className="request-form">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>How can we help:*</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>

                            <Col>
                                <Form.Control placeholder="Your name*" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Phone Number*" />
                            </Col>
                            
                            <Col>
                                <Buttons value="SUBMIT >>"/>
                            </Col>
                        </Row>
                    </Form>   
                    </div>
                </div>  
            </Container>
        </div>
    </div>
  )
}
