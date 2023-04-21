import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary fs-5'>Journalism Without Fear or Favor</p>
                <p className='fs-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center bg-secondary bg-opacity-10 py-3 ps-3 pe-5 gap-3 rounded-2'>
                <Button variant="danger">Latest</Button>
                <Marquee gradient={false} speed={60} delay={50} pauseOnHover={true} className='fs-5 fw-semibold'>
                    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain — as it happened !
                </Marquee>
            </div>

            <Container>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center gap-2'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

        </Container>
    );
};

export default Header;