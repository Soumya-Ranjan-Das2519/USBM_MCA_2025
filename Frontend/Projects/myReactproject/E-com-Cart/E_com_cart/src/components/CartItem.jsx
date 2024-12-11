// src/components/CartItem.jsx
import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-500">{item.description}</p>
        </div>
      </div>
      <div>
        <span className="text-lg font-semibold">${item.price}</span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
