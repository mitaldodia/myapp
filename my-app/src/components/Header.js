import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Buttons from '../share-components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import headLogo from '../inc/header-logo.png';
import { faCartShopping, faLocationDot, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';


function Header() {
  return (
    <>
        <div className="header-all">
            <div className="header-top">
                <Container>
                    <Row>
                        
                        <Col sm={6} md={7}>
                            <div className="header-top-left">
                                <p className ="info-text">Welcome to Financial Services Consultant!</p>
                            </div>
                        </Col>
                        <Col sm={6} md={5}>
                            <div className="header-top-right">
                                <div className="lang-details">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-name'>
                                            English
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> 
                                <div className="social-icon">
                                    <ul>
                                        <li>
                                            <a herf="#!">
                                                <FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon>
                                            </a>
                                        </li>
                                        <li>
                                            <a herf="#!">
                                                <FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon>
                                            </a>
                                        </li>
                                        <li>
                                            <a herf="#!">
                                                <FontAwesomeIcon icon={ faGooglePlusG }></FontAwesomeIcon>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>
                                <div className="btn-details">
                                    <Buttons className='first-dem-btn' value="GET A QUOTE"/>
                                </div>   
                            </div>   
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="header-center">
                <Container>
                    <Row>
                        <Col sm={6} lg={3}>
                            <div className="header-logo">
                                <img src = {headLogo} width="217" />
                            </div>
                        </Col>
                        <Col sm={6} lg={9}>
                            <div className="header-contact-details">
                                <ul>
                                    <li>
                                        <div className="contact-info">
                                            <div className="info-icon">
                                                <FontAwesomeIcon icon = {faPhone} ></FontAwesomeIcon>
                                            </div>
                                            <div className="info-text">
                                                <h6>001-1234-88888</h6>
                                                <p>info.deercreative@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-info">
                                            <div className="info-icon">
                                                <FontAwesomeIcon icon = {faLocationDot} ></FontAwesomeIcon>
                                            </div>
                                            <div className="info-text">
                                                <h6>001-1234-88888</h6>
                                                <p>info.deercreative@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-info">
                                            <div className="info-icon">
                                                <FontAwesomeIcon icon = {faClock} ></FontAwesomeIcon>
                                            </div>
                                            <div className="info-text">
                                                <h6>001-1234-88888</h6>
                                                <p>info.deercreative@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> 
                        </Col>   
                    </Row>
                </Container>
            </div>
            <div className='header-bottom'>
            <Container>
                <Navbar  expand="lg">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">about us</Nav.Link>
                            <Nav.Link href="#action3">Services</Nav.Link>
                            <Nav.Link href="#action4">pages</Nav.Link>
                            <Nav.Link href="#action5">Projects</Nav.Link>
                            <Nav.Link href="#action6">News</Nav.Link>
                            <Nav.Link href="#action7">shop</Nav.Link>
                            <Nav.Link href="#action8">contact</Nav.Link>
                        </Nav>
                        <div className="cart-details">
                            <a herf="#!">
                                <FontAwesomeIcon icon = { faMagnifyingGlass }></FontAwesomeIcon>
                            </a>
                            <a herf="#!">
                                <FontAwesomeIcon icon = { faCartShopping }></FontAwesomeIcon>
                            </a>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>        
            </div>
        </div>
    </>
    
  );
}

export default Header;