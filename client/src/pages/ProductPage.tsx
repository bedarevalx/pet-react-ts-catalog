import React, { useEffect, useState } from 'react';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import MainLayout from '../layouts/MainLayout';
import { ITent } from '../types/types';
import axios from '../axiosInstance';
import { useParams } from 'react-router-dom';
import useGetOptions from '../hooks/useGetOptions';

const Product = () => {
  const params = useParams();
  const [tent, setTent] = useState<ITent>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    garanties,
    countries,
    colors,
    materialsArc,
    materialsBottom,
    placecounts,
    seasons,
  } = useGetOptions();

  useEffect(() => {
    async function fetchTent(id: number) {
      const response = await axios.get('/api/tent/' + id);
      setTent(response.data);
      setIsLoading(false);
    }
    fetchTent(Number(params.id));
  }, []);

  return (
    <MainLayout>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <ProductInfo
          id={Number(params.id)}
          tent={tent}
          garanties={garanties}
          countries={countries}
          placecounts={placecounts}
          seasons={seasons}
          matArc={materialsArc}
          matBot={materialsBottom}
          colors={colors}
        />
      )}
    </MainLayout>
  );
};

export default Product;
