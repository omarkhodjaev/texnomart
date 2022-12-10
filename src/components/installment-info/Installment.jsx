import React from "react";
import "./Installment.css";
import { Link } from "react-router-dom";

const Installment = () => {
  return (
    <div className="info">
      <div className="container">
        <h1 className="title">Telefonlar va maishiy texnika muddatli to'lovga</h1>
        <div className="installment-wrapper">
          <Link className="installment-link" to="/">
            <div className="info-img">
              <img
                src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg"
                alt=""
              />
            </div>
            <h1>Muddatli to'lovga sotib olish</h1>
            <div className="desc">
              Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov
            </div>
          </Link>

          <Link className="installment-link" to="/">
            <div className="info-img">
              <img
                src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg"
                alt=""
              />
            </div>
            <h1>Bepul yetkazib berish</h1>
            <div className="desc">
              Texnomartga tovarlarni yetkazib berish shartlari
            </div>
          </Link>

          <Link className="installment-link" to="/">
            <div className="info-img">
              <img
                src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg"
                alt=""
              />
            </div>
            <h1> Mahsulotlar uchun kafolat</h1>
            <div className="desc">
              Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma
              narsani bilib oling
            </div>
          </Link>

          <Link className="installment-link" to="/">
            <div className="info-img">
              <img
                src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg"
                alt=""
              />
            </div>
            <h1> Bonus tizimi</h1>
            <div className="desc">Bonus tizimi</div>
          </Link>

          <Link className="installment-link" to="/">
            <div className="info-img">
              <img
                src="https://texnomart.uz/_nuxt/img/installment-5.513f513.svg"
                alt=""
              />
            </div>
            <h1> Yordam</h1>
            <div className="desc">Ko'p beriladigan savollar</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Installment;
