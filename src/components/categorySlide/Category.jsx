import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Category = () => {
  return (
    <div className="container">
      <h2>Ommabop kategoriyalar</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        className="catagory__wrapper"
      >
        <SwiperSlide>
          <Link className="catalog__link" to="/">
            <div>
              <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg" />
            </div>
            <div>
              <p>Changyutgichlar</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="catalog__link" to="/">
            <div>
              <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg" />
            </div>
            <div>
              <p>Muzlatgichlar</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="catalog__link" to="/">
            <div>
              <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg" />
            </div>
            <div>
              <p>Konditsioner</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="catalog__link" to="/">
            <div>
              <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg" />
            </div>
            <div>
              <p>Televizorlar</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="catalog__link" to="/">
            <div>
              <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg" />
            </div>
            <div>
              <p>Fenlar</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="catalog__link" to="/">
            <div>
              <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg" />
            </div>
            <div>
              <p>Kir Yuvish Mashinalar</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="catalog__link" to="/">
            <div>
              <img src="https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg" />
            </div>
            <div>
              <p>Planshetlar</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
