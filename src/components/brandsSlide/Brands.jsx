import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./Brands.css";
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className='container'>
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={8} spaceBetween={20} className="carousel">
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404154940058.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404542676301.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101405315369098.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404481916020.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404183539183.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404450190315.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404474125545.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404461797247.webp" alt="apple" /></Link></div></SwiperSlide>
      <SwiperSlide><div className='card'><Link to="/"><img src="https://backend.texnomart.uz//images/brands/2022101404240931733.webp" alt="apple" /></Link></div></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Brands