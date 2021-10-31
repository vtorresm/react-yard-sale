import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ProductItem from '../components/ProductItem';

import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios.get(API);
    setProducts(response.data);
  }, []);

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
