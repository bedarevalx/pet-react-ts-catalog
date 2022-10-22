import React from 'react';
import AdminPanel from '../components/AdminPanel/AdminPanel';
import ProductAdmin from '../components/ProductAdmin/ProductAdmin';
import MainLayout from '../layouts/MainLayout';

const Admin = () => {
  return (
    <MainLayout>
      <AdminPanel></AdminPanel>
    </MainLayout>
  );
};

export default Admin;
