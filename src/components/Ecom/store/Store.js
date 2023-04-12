import React, { useState } from "react";
import NavBar from "./components/Ecom/MainHeader/NavBar"
import Header from "./components/Ecom/MainHeader/Header";
import ProductsOnScreen from "./components/Ecom/Layout/ProductsOnScreen";
import Cart from "./components/Ecom/Cart/Cart";
import { CartProvider } from './components/Ecom/Cart/CartProvider';

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
  