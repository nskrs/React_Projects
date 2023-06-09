import React from "react";
import classes from "./MainDetails.module.css";
import ProductList from "./ProductList";
import { Container, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const MainDetails = () => {
  const productsDetails = productsArr.map((item) => (
    <ProductList
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));

  return (
    <>
      <div className={classes.title}>
        <h4>Music</h4>
        <span className={classes.products}>{productsDetails}</span>
      </div>
      <Container className={classes.button}>
        <Button className="btn-dark btn-outline-warning">See the Cart</Button>
      </Container>
    </>
  );
};

export default MainDetails;
