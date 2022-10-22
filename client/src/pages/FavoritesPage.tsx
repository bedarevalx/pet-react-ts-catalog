import React, { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import MainLayout from '../layouts/MainLayout';
import { IProduct } from '../types/types';

const Favorites = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <MainLayout>
      <ProductList products={products}></ProductList>
    </MainLayout>
  );
};

export default Favorites;
