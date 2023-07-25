import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Nav, Navbar } from "react-bootstrap";
import logo from "./assets/logo.png";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow-sm"
    >
      {/* Navbar Brand with logo */}
      <Navbar.Brand>
        <img
          src={logo}
          alt=".logo"
          style={{ height: "3rem", marginLeft: "2rem" }}
        />
      </Navbar.Brand>

      {/* Navbar Toggle button for mobile view */}
      <Navbar.Toggle aria-controls="navbar-nav" className="me-5" />

      {/* Navbar Collapse containing the navigation links */}
      <Navbar.Collapse id="navbar-nav" className="px-5 pt-3">
        {/* Navigation links  */}
        <Nav className="justify-content-end  w-100 me-5">
          {/* Individual navigation links with smooth scrolling to the corresponding sections */}
          <Nav.Link as={Link} smooth to="#service" className="fw-bolder active">
            Home
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#service" className="fw-bolder">
            Our Service
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#project" className="fw-bolder">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#blog" className="fw-bolder">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#team" className="fw-bolder">
            Team
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#contact" className="fw-bolder">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
