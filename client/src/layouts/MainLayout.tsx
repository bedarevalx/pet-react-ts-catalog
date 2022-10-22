import React, { FC, ReactNode } from 'react';
import Header from '../components/Header/Header';
import bootstrap from '../assets/bootstrap.module.scss';
import Footer from '../components/Footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={bootstrap.container}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
