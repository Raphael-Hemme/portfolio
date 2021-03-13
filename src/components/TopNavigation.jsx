import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Logo from "./Logo";

const TopNavigation = ({ topNavHeight }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      fixed="top"
      className={topNavHeight}
    >
      <Navbar.Brand href="/" className="component-navbar-brand align-middle">
        <Logo size="small" />{" "}
        <span className="d-inline-block align-middle text-secondary">
          Raphael Hemme
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="#deets">Contact</Nav.Link>
          <Nav.Link href="#deets">Notes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavigation;
