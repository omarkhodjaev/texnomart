import React from 'react';
import Navbar from '../../components/headerNavbar/Navbar';
import HeaderCenter from '../../components/headerCenter/HeaderCenter';
import HeaderBottom from '../../components/headerBottom/HeaderBottom';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/brandsSlide/Brands';
import Category from '../../components/categorySlide/Category';
import Products from '../../components/products/Products';
import AppBanner from "../../components/app-banner/AppBanner";
import Installment from '../../components/installment-info/Installment';
import Footer from '../../components/footer/Footer';
import Newproducts from '../../components/newproducts/Newproducts';

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
        <Products/>
        <Newproducts/>
        <Installment/>
        <Footer/>
    </div>
  )
}

export default Home