"use client"
import React from 'react';
import { useCart } from '../../context/cartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();
console.log("cart",cart)
  return (
    <div className='mt-20'>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
