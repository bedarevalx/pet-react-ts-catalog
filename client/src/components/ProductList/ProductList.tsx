import React, { FC } from 'react';
import styles from './/ProductList.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import { IProduct } from '../../types/types';
import Card from '../Card/Card';
import Filters from '../Filters/Filters';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <section
      className={`${styles.products} ${bootstrap.row} ${bootstrap['gy-3']}`}>
      <div className={`${bootstrap['col-lg-9']} ${bootstrap['col-md-12']}`}>
        <div className={`${styles.productsList}`}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <Filters></Filters>
    </section>
  );
};

export default ProductList;
