import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderBottom from '../../components/headerBottom/HeaderBottom'
import HeaderCenter from '../../components/headerCenter/HeaderCenter'
import Navbar from '../../components/headerNavbar/Navbar'

const Pdp = () => {
  const smth = useParams()

  const[singleData,setSingleData] = useState(null)

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${smth.id}`)
      .then((response) => response.json())
      .then((data) => setSingleData(data));
  }, []);

  

  return (
      <>
        <Navbar/>
        <HeaderCenter/>
        <HeaderBottom/>
        <div className='container flex'>
          <div>
              <img src={singleData?.category.image} alt="" />
          </div>
          <div>
             <div>Mahsulot haqida qisqacha</div>
             <h3>{singleData?.title}</h3>
             <div>{singleData?.price}</div>
             <div>{singleData?.description}</div>
            
          </div>
        </div>


      </>
  )
}

export default Pdp