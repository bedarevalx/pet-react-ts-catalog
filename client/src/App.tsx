import React, { useEffect } from 'react';
import AdminPage from './pages/AdminPage';
import './index.css';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';
import ProductPage from './pages/ProductPage';
import TentsPage from './pages/TentsPage';
import EditPage from './pages/EditPage';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import { fetchGaranties } from './store/reducers/GaranteeSlice';
import { fetchCountries } from './store/reducers/CountrySlice';
import { fetchMaterialArcs } from './store/reducers/MaterialArcSlice';
import { fetchMaterialsBottom } from './store/reducers/MaterialBottomSlice';
import { fetchSeasons } from './store/reducers/SeasonsSlice';
import { fetchPlacecounts } from './store/reducers/PlacecountSlice';
import { fetchTents } from './store/reducers/TentSlice';
import { fetchColors } from './store/reducers/ColorSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGaranties());
    dispatch(fetchCountries());
    dispatch(fetchMaterialArcs());
    dispatch(fetchMaterialsBottom());
    dispatch(fetchSeasons());
    dispatch(fetchPlacecounts());
    dispatch(fetchColors());
  }, []);

  return (
    <Routes>
      <Route path={'/admin'} element={<AdminPage></AdminPage>} />
      <Route path={'/'} element={<CatalogPage></CatalogPage>} />
      <Route path={'/edit/:id'} element={<EditPage></EditPage>} />
      <Route path={'/favorites'} element={<FavoritesPage></FavoritesPage>} />
      <Route path={'/tents'} element={<TentsPage></TentsPage>} />
      <Route path={'/product/:id'} element={<ProductPage></ProductPage>} />
    </Routes>
  );
}

export default App;
