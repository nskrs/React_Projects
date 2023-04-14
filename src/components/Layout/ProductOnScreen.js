import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { Link } from "react-router-dom";
import productsArr from "../Body/ProductsData";

const ProductsOnScreen = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Row xs={1} md={2} className="g-4 mt-3 ms-5">
      {productsArr.map((product, idx) => (
        <Col key={idx}>
          <Card style={{ width: "18rem" }} className="shadow-lg mx-auto">
            <Card.Title className="text-center p-3" as="h4">
              <Link to={`/product/${idx}`}>{product.title}</Link>
            </Card.Title>
            <Card.Img variant="top" src={product.imageUrl} />

            <Card.Body>
              <Card.Text as="h4">${product.price}</Card.Text>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsOnScreen;
