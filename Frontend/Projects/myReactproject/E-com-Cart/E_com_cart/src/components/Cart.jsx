// src/components/Cart.jsx
import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <p className="text-center text-lg font-semibold">Your cart is empty</p>;
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</span>
      </div>
    </div>
  );
};

export default Cart;
