import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { NavLink } from "react-router-dom";

const NavBar = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link">HOME</NavLink>
            <NavLink to="/store" className="nav-link">STORE</NavLink>
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>
          </Nav>
          <Button variant="primary" onClick={toggleCart}>CART-{cartItems.length}</Button>{" "}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
