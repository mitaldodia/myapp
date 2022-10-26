import React from 'react';
import Container from 'react-bootstrap/Container';
import Title from '../share-components/Title';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartPie, faChartSimple } from '@fortawesome/free-solid-svg-icons';

export default function Industries() {
  return (
    <div>
      <div className="industries-contains">
        <Container>
            <div className="industries-head">
                <Title value = "our industries"/>
            </div>
            <div className="industries-details">
                <Row>
                    <Col md = {4} sm = {6}>
                        <div className="indest-box">
                            <div className="indust-icon">
                                <FontAwesomeIcon icon={ faChartPie }></FontAwesomeIcon>
                            </div>
                            <div className="indust-txt">
                                <h5>Corporate Finance</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </Col>
                    <Col md = {4} sm = {6}>
                        <div className="indest-box">
                            <div className="indust-icon">
                                <FontAwesomeIcon icon={ faChartPie }></FontAwesomeIcon>
                            </div>
                            <div className="indust-txt">
                                <h5>Economic Consulting</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </Col>
                    <Col md = {4} sm = {6}>
                        <div className="indest-box">
                            <div className="indust-icon">
                                <FontAwesomeIcon icon={ faChartSimple }></FontAwesomeIcon>
                            </div>
                            <div className="indust-txt">
                                <h5>Forensic & Litigation</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </Col>
                    <Col md = {4} sm = {6}>
                        <div className="indest-box">
                            <div className="indust-icon">
                                <FontAwesomeIcon icon={ faBell }></FontAwesomeIcon>
                            </div>
                            <div className="indust-txt">
                                <h5>Strategic Communications</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </Col>
                    <Col md = {4} sm = {6}>
                        <div className="indest-box">
                            <div className="indust-icon">
                                <FontAwesomeIcon icon={ faChartSimple }></FontAwesomeIcon>
                            </div>
                            <div className="indust-txt">
                                <h5>Technology Consulting</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </Col>
                    <Col md = {4} sm = {6}>
                        <div className="indest-box">
                            <div className="indust-icon">
                                <FontAwesomeIcon icon={ faChartSimple }></FontAwesomeIcon>
                            </div>
                            <div className="indust-txt">
                                <h5>Healthcare Consulting</h5>
                                <p>Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
      </div>
    </div>
  )
}
