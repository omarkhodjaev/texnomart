import React from 'react';
import Navbar from '../../headerNavbar/Navbar';
import HeaderCenter from '../../components/headerCenter/HeaderCenter';
import HeaderBottom from '../../components/headerBottom/HeaderBottom';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/brandsSlide/Brands';
import Category from '../../components/categorySlide/Category';


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
    </div>
  )
}

export default Home