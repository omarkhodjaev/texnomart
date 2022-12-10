import React from 'react';
import Navbar from '../../components/headerNavbar/Navbar';
import HeaderCenter from '../../components/headerCenter/HeaderCenter';
import HeaderBottom from '../../components/headerBottom/HeaderBottom';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/brandsSlide/Brands';
import Category from '../../components/categorySlide/Category';
import AppBanner from "../../components/app-banner/AppBanner";

const Home = () => {
  document.title = "Home"
  return (
    <div>
        <Navbar/>
        <HeaderCenter/>
        <HeaderBottom/>
        <Banner/>
        <Brands/>
        <Category/>
        <AppBanner/>
    </div>
  )
}

export default Home