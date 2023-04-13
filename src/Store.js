import React, { useState } from "react";
import NavBar from "./Components/MainHeader/NavBar";
import Header from "./Components/MainHeader/Header";
import ProductsOnScreen from "./Components/Layout/ProductsOnScreen";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Components/Cart/CartProvider";

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const [headerOpen, setHeaderOpen] = useState(true);
  const [productsOpen, setProductsOpen] = useState(true);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setNavOpen(!navOpen);
    setHeaderOpen(!headerOpen);
    setProductsOpen(!productsOpen);
  };

  return (
    <CartProvider>
      <div className="App">
        {navOpen && <NavBar toggleCart={toggleCart} />}
        {headerOpen && <Header />}
        {productsOpen && <ProductsOnScreen />}
        {cartOpen && <Cart />}
      </div>
    </CartProvider>
  );
};

export default Store;
