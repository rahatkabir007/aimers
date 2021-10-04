import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar sticky="top"  expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#" className="main-title">AIMERS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto middle-area">
                            <Nav.Link id="middle-link" href="#home">
                                <NavLink  to='/home'>Home</NavLink>
                            </Nav.Link>
                            <Nav.Link id="middle-link" href="#services">
                                <NavLink  to='/services'>Services</NavLink>
                            </Nav.Link>
                            <Nav.Link id="middle-link" href="#blog">
                                <NavLink to='/blog'>Blog</NavLink>
                            </Nav.Link>
                            <Nav.Link id="middle-link" href="#aboutus">
                                <NavLink to='/aboutus'>About Us</NavLink>
                            </Nav.Link>
                        </Nav>
                        <Nav className="right-area">
                            <Nav.Link id="right-link" href="#home">Register</Nav.Link>
                            <Nav.Link id="right-link" href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className=" intro-area">
                <h2>Let's Learn At The Best Place Together</h2>
                <a href="/home">Let's Get Started</a>
               
            </div>
        </div>
    );
};

export default Header;