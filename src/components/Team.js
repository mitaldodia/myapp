import React from 'react';
import Container from 'react-bootstrap/Container';
import Title from '../share-components/Title';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teamPic from '../inc/team-1.jpg';
import teamPic2 from '../inc/team-2.jpg';
import teamPic3 from '../inc/team-3.jpg';
import teamPic4 from '../inc/team-4.jpg';


export default function Team() {
  return (
    <div>
        <div className="team-contain">
            <Container>
                <div className="team-title">
                    <Title value = 'meet our team'/>
                    <p>We are here to Acelerate your business and help you find the way.</p>
                </div>
                <div className="team-details">
                    <Row>
                        <Col md = {3} sm = {6}>
                            <div className="team-box">
                                <div className="team-img">
                                    <img src = {teamPic}/>
                                </div>
                                <div className="team-txt">
                                    <h5>Jackson Nash</h5>
                                    <p>Tax Advice</p>
                                </div>
                            </div>
                        </Col>
                        <Col md = {3} sm = {6}>
                            <div className="team-box">
                                <div className="team-img">
                                    <img src = {teamPic2}/>
                                </div>
                                <div className="team-txt">
                                    <h5>Ollie Schneider</h5>
                                    <p>Business Planner</p>
                                </div>
                            </div>
                        </Col>
                        <Col md = {3} sm = {6}>
                            <div className="team-box">
                                <div className="team-img">
                                    <img src = {teamPic3}/>
                                </div>
                                <div className="team-txt">
                                    <h5>Jackson Nash</h5>
                                    <p>Tax Advice</p>
                                </div>
                            </div>
                        </Col>
                        <Col md = {3} sm = {6}>
                            <div className="team-box">
                                <div className="team-img">
                                    <img src = {teamPic4}/>
                                </div>
                                <div className="team-txt">
                                    <h5>Roger West</h5>
                                    <p>Tax Advice</p>
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
