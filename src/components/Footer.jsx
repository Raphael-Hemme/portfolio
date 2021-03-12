import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      fluid="true"
      fixed="bottom"
      className="justify-content-center"
    >
      <Nav className="justify-content-center">
        <Nav.Link href="/projects">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </Nav.Link>
        <Nav.Link href="/about">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Nav.Link>
        <Nav.Link href="#deets">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
