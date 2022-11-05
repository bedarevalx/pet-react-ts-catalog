import React, { FC } from 'react';
import styles from './/ProductList.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import { ICard } from '../../types/types';
import Card from '../Card/Card';
import Filters from '../Filters/Filters';

interface ProductListProps {
  products: ICard[];
  isLoading: boolean;
}

const ProductList: FC<ProductListProps> = ({ products, isLoading }) => {
  return (
    <section
      className={`${styles.products} ${bootstrap.row} ${bootstrap['gy-3']}`}>
      <div className={`${bootstrap['col-lg-9']} ${bootstrap['col-md-12']}`}>
        <div className={`${styles.productsList}`}>
          {isLoading ? (
            <p>Загрузка...</p>
          ) : (
            products?.map((tent, id) => (
              <Card
                key={id}
                name={tent.name}
                price={tent.price}
                imagePath={tent.imagePath}
                id={tent.id}></Card>
            ))
          )}
        </div>
      </div>
      <Filters></Filters>
    </section>
  );
};

export default ProductList;
