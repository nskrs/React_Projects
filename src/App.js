import React, { useState } from "react";
import CartProvider from "./Shoe of Ecommerce/Components/store/CartProvider";
import "./App.css";
import ShoeForm from "./Shoe of Ecommerce/Shoes/ShoesForm";
import Header from "./Shoe of Ecommerce/Components/Header/Header";
import Shoes from "./Shoe of Ecommerce/Shoes/Shoes";
import Cart from "./Shoe of Ecommerce/Components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartOpenHandler = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const closeHandler = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Header onClick={cartOpenHandler} />
      <ShoeForm />
      {showCart && <Cart onClose={closeHandler} />}
      <Shoes />
    </CartProvider>
  );
}

export default App;
