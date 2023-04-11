import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(cartElements);

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h3  as="h1" className="text-center mt-3">Cart</h3>
      <Container>
        <Row xs={1} md={2} className="g-4 mt-3">
          {cartItems.map((item, index) => (
            <Col key={index}>
              <Card style={{ width: "25rem" }} className="shadow-lg">
                <Card.Title className="text-center p-3" as="h4">
                  {item.title}
                </Card.Title>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Text as="h4">${item.price}</Card.Text>
                  <Card.Text as="h4">Quantity: {item.quantity}</Card.Text>
                  <Button onClick={() => removeItem(index)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cart;