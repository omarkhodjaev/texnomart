import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Home from './home/Home';
import Login from "./login/Login";
import Pdp from "./pdp/Pdp"

const index = () => {
  return (
    <>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/:id' element={<Pdp/>}/>
       </Routes>
    </>
  )
}

export default index