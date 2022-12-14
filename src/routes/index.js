import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Cart from './cart/Cart';
import Home from './home/Home';
import Login from "./login/Login";
import Pdp from "./pdp/Pdp"
import Signup from './sign-up/Signup';

const index = () => {
  return (
    <>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/:id' element={<Pdp/>}/>
         <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </>
  )
}

export default index