import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "./Logo";

const TopNavigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/" className="component-navbar-brand align-middle">
        <Logo
          className="d-inline-block align-middle"
          size="logo-container-small-nav"
        />{" "}
        <h1 className="d-inline-block align-middle text-secondary">
          Raphael Hemme
        </h1>
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
  );
};

export default TopNavigation;
