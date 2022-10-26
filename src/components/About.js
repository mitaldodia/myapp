import React from 'react';
import Container from 'react-bootstrap/Container';
import Title from '../share-components/Title';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHeadphones, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export default function About() {
  return (
    <>
        <div className="about-details">
            <Container>
                <div className="about-contains">
                    <div className="about-title">
                        <Title value = 'About us'/>
                        <p>We help you in creating a financial strategy that represents your personality. 
                            Getting to know you is financial advisor’s primary goal. – 
                            An approach centered around your life’s priorities. 
                            It’s time for a financial strategy that puts your needs and priorities front and center.</p>
                    </div>
                    <div className="about-us-box">
                        <Row>
                            <Col sm={12} md={4}>
                                <div className="about-box-details">
                                    <FontAwesomeIcon icon={ faDollarSign }></FontAwesomeIcon>
                                    <h5>Financial Projections</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit 
                                        voluptatem accusan doloremque laudantium</p>
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="about-box-details">
                                    <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                                    <h5>Strategy & Consulting</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit 
                                        voluptatem accusan doloremque laudantium</p>
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                                <div className="about-box-details">
                                    <FontAwesomeIcon icon={ faHeadphones }></FontAwesomeIcon>
                                    <h5>Online Consulting</h5>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit 
                                        voluptatem accusan doloremque laudantium</p>
                                </div>
                            </Col>
                        </Row>                    
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}
