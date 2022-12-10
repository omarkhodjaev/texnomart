import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Banner.css"
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='bannerwrapper'>
     <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Link to="/"><img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2617201920kr.webp" alt="Img" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/8794121920kr.webp" alt="Img" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/5247261920kr.webp" alt="Img" /></Link></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner