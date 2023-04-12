import React, { useState,useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {  CartContext } from "./CartContext";
import { CartProvider } from "./CartProvider";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (index) => {
    cartCtx.removeItem(index);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addToCart({ ...item, quantity: 1 });
  };

  const totalQuantity = cartCtx.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartProvider>
      <h3 as="h1" className="text-center mt-3">
        Cart
      </h3>
      <Container>
        <Row xs={1} md={2} className="g-4 mt-3">
          {cartCtx.cartItems.map((item, index) => (
            <Col key={index}>
              <Card style={{ width: "25rem" }} className="shadow-lg">
                <Card.Title className="text-center p-3" as="h4">
                  {item.title}
                </Card.Title>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Text as="h4">${item.price}</Card.Text>
                  <Card.Text as="h4">Quantity: {item.quantity}</Card.Text>
                  <Button onClick={() => cartItemAddHandler(item)}>Add</Button>
                  <Button onClick={() => cartItemRemoveHandler(index)}>
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="text-end mt-3">
        <Button variant="primary">
          Cart <span className="badge bg-secondary">{totalQuantity}</span>
        </Button>
      </div>
    </CartProvider>
  );
};

export default Cart;