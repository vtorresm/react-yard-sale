import React from 'react';

import useProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';

import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
const products = useProducts(API);

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
