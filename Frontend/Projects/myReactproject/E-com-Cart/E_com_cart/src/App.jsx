// src/App.jsx
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartProvider from './components/CartContext';
import './App.css'; 

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">E-commerce Cart</h1>
        
        <ProductList />
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
