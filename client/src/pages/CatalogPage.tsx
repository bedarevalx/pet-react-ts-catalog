import React, { useEffect, useState, useRef } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import MainLayout from '../layouts/MainLayout';
import { fetchCards } from '../store/reducers/TentSlice';
import styles from '../assets/buttons.module.scss';
import SearchBar from '../components/SearchBar/SearchBar';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const [queryParams, setQueryParams] = useState({ page: 1, name: '' });
  const { cards, isLoading, totalPages } = useAppSelector(
    (state) => state.tentReducer,
  );

  useEffect(() => {
    dispatch(fetchCards(queryParams));
  }, [queryParams]);

  return (
    <MainLayout>
      <SearchBar setQueryParams={setQueryParams}></SearchBar>
      <ProductList products={cards} isLoading={isLoading}></ProductList>
      <div className={`${styles.pagBtnWrapper}`}>
        {new Array(totalPages).fill(0).map((val, index) => (
          <button
            key={index}
            className={`${
              index + 1 === queryParams.page ? styles.current : ''
            } `}
            onClick={() =>
              setQueryParams((prev) => ({ page: index + 1, name: prev.name }))
            }>
            {index + 1}
          </button>
        ))}
      </div>
    </MainLayout>
  );
};

export default Catalog;
