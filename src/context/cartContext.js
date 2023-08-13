// context/cartContext.js
"use client"
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);
 // Inside your CartContext
const addToCart = (product) => {
  console.log('Adding to cart:', product);
  setCart([...cart, product]);
  setNotification('Item added to cart.'); // Set the notification message
  setTimeout(() => setNotification(null), 4000); // Clear the notification after 2 seconds
};

const removeFromCart = (productId) => {
  console.log('Removing from cart:', productId);
  setCart(cart.filter(item => item.id !== productId));
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, notification }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
