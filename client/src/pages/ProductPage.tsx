import React, { useEffect, useState } from 'react';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import MainLayout from '../layouts/MainLayout';
import { ITent } from '../types/types';
import axios from '../axiosInstance';
import { useAppSelector } from '../hooks/redux';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  const [tent, setTent] = useState<ITent>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { garanties } = useAppSelector((state) => state.garanteeReducer);
  const { countries } = useAppSelector((state) => state.countryReducer);
  const { materials: matArc } = useAppSelector(
    (state) => state.materialArcReducer,
  );
  const { materials: matBot } = useAppSelector(
    (state) => state.materialBottomReducer,
  );
  const { placecounts } = useAppSelector((state) => state.placecountReducer);
  const { seasons } = useAppSelector((state) => state.seasonReducer);
  const { colors } = useAppSelector((state) => state.colorReducer);

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
          matArc={matArc}
          matBot={matBot}
          colors={colors}
        />
      )}
    </MainLayout>
  );
};

export default Product;
