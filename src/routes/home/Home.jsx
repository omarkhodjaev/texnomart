import React from 'react'
import HeaderCenter from '../../components/header/HeaderCenter'
import Navbar from '../../components/navbartop/Navbar'

const Home = () => {
  document.title = "Home"
  return (
    <div>
        <Navbar/>
        <HeaderCenter/>
    </div>
  )
}

export default Home