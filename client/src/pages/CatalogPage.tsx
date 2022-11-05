import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import MainLayout from '../layouts/MainLayout';
import { fetchCards } from '../store/reducers/TentSlice';
import styles from '../assets/buttons.module.scss';
import SearchBar from '../components/SearchBar/SearchBar';

const Catalog = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const { cards, isLoading, totalPages } = useAppSelector(
    (state) => state.tentReducer,
  );

  useEffect(() => {
    dispatch(fetchCards({ page }));
  }, [page]);

  return (
    <MainLayout>
      <SearchBar></SearchBar>
      <ProductList products={cards} isLoading={isLoading}></ProductList>
      <div className={`${styles.pagBtnWrapper}`}>
        {new Array(totalPages).fill(0).map((val, index) => (
          <button
            key={index}
            className={`${index + 1 === page ? styles.current : ''} `}
            onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </MainLayout>
  );
};

export default Catalog;
