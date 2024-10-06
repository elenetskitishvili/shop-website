'use client';
import React, { useState, useEffect } from 'react';

import './products.css';
import ProductCard from '../components/ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const productsData = [
    {
      name: 'Rose Petal Bliss',
      description:
        'A gentle, rose-infused soap that nourishes and hydrates, leaving your skin soft and delicately scented.',
      image: 'images/product-1.jpg',
    },
  ];

  return (
    <main className='main main-products'>
      <section className='section-products'>
        <p className='section-products__intro'>
          Discover our collection of handmade soaps, crafted with natural
          ingredients to nourish your skin
        </p>

        <ul className='products'>
          {products.map((product) => (
            <ProductCard productsObj={product} key={product.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Products;
