import {  useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      const index = cartItems.findIndex((cartItem) => cartItem.title === item.title);
  
      if (index === -1) {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      } else {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
      }
    };
  
    const removeItem = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
        {children}
      </CartContext.Provider>
    );
  }