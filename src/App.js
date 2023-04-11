import React, { useState } from "react";
import NavBar from "./components/Ecom/MainHeader/NavBar"
import Header from "./components/Ecom/MainHeader/Header";
import ProductsOnScreen from "./components/Ecom/Layout/ProductsOnScreen";
import Cart from "./components/Ecom/Cart/Cart";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const [headerOpen,setHeaderOpen] = useState(true);
  const [productsOpen, setProductsOpen] = useState(true);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setNavOpen(!navOpen);
    setHeaderOpen(!headerOpen);
    setProductsOpen(!productsOpen);
  };

  return (
    <>
      {navOpen && <NavBar toggleCart={toggleCart}/>}
      {headerOpen && <Header/>}
      {productsOpen && <ProductsOnScreen  />}
      {cartOpen && <Cart />}
    </>
  );
};

export default App;