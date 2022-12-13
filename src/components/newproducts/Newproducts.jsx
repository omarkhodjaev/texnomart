import React, { useEffect, useState } from "react";
import "./Newproducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { BiHeart } from "react-icons/bi";
import { RiScalesFill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

const Newproducts = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div className="products">
      <div className="container">
        <div>
          <h1 className="product-header"    >Yangi Mahsulotlar</h1>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={2}
            slidesPerView={5}
            className="product-swiper"
          >
            {productData
              .slice(0, 7)
              .map(({ title, id, price, category: { image } }) => (
                <SwiperSlide key={uuidv4()}>
                  <div className="product-style">
                    <div className="product-card">
                      <div className="product-img">
                        <Link to={`${id}`}>
                          <img src={image} alt="Images_empty" />
                        </Link>
                      </div>
                      <div className="product-bottom">
                        <h3 className="product-title">
                          <Link to={`${id}`}>{title}</Link>
                        </h3>
                        <p className="product-price">{price}$</p>
                        <div className="product-action">
                          <button className="product-btn">
                            <span>
                              <SlBasket />
                            </span>
                            <span> Savatchaga </span>
                          </button>
                          <div className="action-right">
                            <button className="like-btn">
                              <BiHeart />
                            </button>
                            <button>
                              <RiScalesFill />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Newproducts;
