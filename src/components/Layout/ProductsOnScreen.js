import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductsOnScreen = () => {
  return (
    <Row xs={1} md={2} className="g-4 mt-3 ms-5">
      {productsArr.map((product, idx) => (
        <Col key={idx}>
          <Card style={{ width: "25rem" }} className="shadow-lg">
            <Card.Title className="text-center p-3" as="h4">{product.title}</Card.Title>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Text as="h4">${product.price}</Card.Text>
              <Button>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsOnScreen;
