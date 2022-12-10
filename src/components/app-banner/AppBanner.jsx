import React from 'react';
import { Link } from 'react-router-dom';
import "./AppBanner.css"

const AppBanner = () => {
  return (
    <div className="container">
      <div className="app-banner">
        <div className="left">
          <div>
            <img
              src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="info-title">Ilovani yuklang</div>
          <div className="info-desc">
            Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
          </div>
          <div className='info-quar'>
             <div className='code'>
                <img src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png" alt="" />
             </div>
             <div className='text'>
                Kamerani yo`naltiring va Texnomart ilovasini bepul yuklang
             </div>
          </div>
            <Link to="/" target={"_blank"}>
                <img src="https://texnomart.uz/_nuxt/img/play-market-uz.20f41ac.png" alt="Google play" />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default AppBanner