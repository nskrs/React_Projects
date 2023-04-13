import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const NavBar = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={toggleCart}>CART-{cartItems.length}</Button>{" "}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;