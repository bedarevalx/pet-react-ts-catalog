import React, { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import MainLayout from '../layouts/MainLayout';
import { ICard, ITent } from '../types/types';

const Favorites = () => {
  const [products, setProducts] = useState<ICard[]>([]);
  return (
    <MainLayout>
      <ProductList products={products} isLoading={true}></ProductList>
    </MainLayout>
  );
};

export default Favorites;
