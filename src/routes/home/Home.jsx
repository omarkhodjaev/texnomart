import React from 'react';
import Navbar from '../../components/HeaderTop/Navbar';
import HeaderCenter from '../../components/headerCenter/HeaderCenter';
import HeaderBottom from '../../components/headerBottom/HeaderBottom';

const Home = () => {
  document.title = "Home"
  return (
    <div>
        <Navbar/>
        <HeaderCenter/>
        <HeaderBottom/>
    </div>
  )
}

export default Home