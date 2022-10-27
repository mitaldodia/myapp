import React from 'react'
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import brandLogo from '../inc/brand-1.png';

export default function Brand() {
  return (
    <div>
        <div className="brand-contains">
            <Container>
                <ListGroup>
                    <ListGroup.Item action href="#link1">
                        <img src = {brandLogo}/>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link1">
                        <img src = {brandLogo}/>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link1">
                        <img src = {brandLogo}/>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link1">
                        <img src = {brandLogo}/>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link1">
                        <img src = {brandLogo}/>
                    </ListGroup.Item>
                   
        
                </ListGroup>
            </Container>
        </div>
    </div>
  )
}
