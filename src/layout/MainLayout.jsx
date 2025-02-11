import React from 'react';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import TopBer from '../components/TopBer';

function MainLayout() {
  return (
    <div>
      <TopBer/>
      <MainNavbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
}

export default MainLayout;
