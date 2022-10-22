import React from 'react';
import AdminPage from './pages/AdminPage';
import './index.css';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';
import ProductPage from './pages/ProductPage';
import TentsPage from './pages/TentsPage';
import EditPage from './pages/EditPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={'/admin'} element={<AdminPage></AdminPage>} />
      <Route path={'/'} element={<CatalogPage></CatalogPage>} />
      <Route path={'/edit'} element={<EditPage></EditPage>} />
      <Route path={'/favorites'} element={<FavoritesPage></FavoritesPage>} />
      <Route path={'/tents'} element={<TentsPage></TentsPage>} />
      <Route path={'/product/:id'} element={<ProductPage></ProductPage>} />
    </Routes>
  );
}

export default App;
