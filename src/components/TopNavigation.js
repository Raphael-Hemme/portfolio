import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../images/own-logo/RH-logo.png';


const TopNavigation = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/" className="component-navbar-brand align-middle">
                <img
                    alt=""
                    src={logo}
                    width="60px"
                    className="d-inline-block align-middle"
                />{' '}
                <h1 className="d-inline-block align-middle text-secondary">Raphael Hemme</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="#deets">Blog</Nav.Link>
                    <Nav.Link href="#deets">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNavigation;

