import React from 'react';
import Carousel from './Carousel';
import './Home.css';

const Home = () => (
  <div className="home">
    <Carousel />
    <div className="products-preview">
      <h2>Featured Products</h2>
      <div className="product-grid">
        <img src="product1.jpg" alt="Product 1" />
        <img src="product2.jpg" alt="Product 2" />
        <img src="product3.jpg" alt="Product 3" />
      </div>
    </div>
  </div>
);

export default Home;
