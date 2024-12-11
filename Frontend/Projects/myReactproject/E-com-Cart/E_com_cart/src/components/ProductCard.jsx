// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
