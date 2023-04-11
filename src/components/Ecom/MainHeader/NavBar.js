import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ toggleCart }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={toggleCart}>CART</Button>{" "}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;