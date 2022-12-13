import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-content">
              <div className="question">
                Savolingiz bormi? Qo'ng'iroq qiling
              </div>
              <a href="tel:+998910130324">+998 91 013 03 24</a>
            </div>
            <ul className="footer-social">
              <li>
                <Link to="/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaTelegramPlane />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
            <Link className="footer-play" to="/">
              <img
                src="https://texnomart.uz/_nuxt/img/playmarket-logo-uz.793161d.svg"
                alt=""
              />
            </Link>
            <Link className="footer-address" to="/">
              Do`konlar manzillari Toshkent viloyati
            </Link>
          </div>
          <div className="footer-right">
            <div className="menu-wrap">
              <div className="menu-title">Kompaniya</div>
              <div className="menu-link">
                <Link to="/">B2B savdosi</Link>
                <Link to="/">Biz haqimizda</Link>
                <Link to="/">Yangiliklar va sharhlar</Link>
                <Link to="/">IMEI ni tekshirish</Link>
              </div>
            </div>

            <div className="menu-wrap">
              <div className="menu-title">Ma'lumot</div>
              <div className="menu-link">
                <Link to="/">Bepul yetkazib berish</Link>
                <Link to="/">Bonus tizimi</Link>
                <Link to="/">Texnomart ishlash</Link>
                <Link to="/">Shahsiy kabinet</Link>
                <Link to="/">Aloqa raqami</Link>
              </div>
            </div>

            <div className="menu-wrap">
              <div className="menu-title">Haridorga yordam berish</div>
              <div className="menu-link">
                <Link to="/">Muddatli tolov tizimi</Link>
                <Link to="/">Maxsulotlarni qaytarish</Link>
                <Link to="/">Mahsulotlar uchun kafolat</Link>
                <Link to="/">Ko'p so'raladigan savollar</Link>
              </div>
              <Link to="/" className="bonus_tlink">
                <FaTelegramPlane />
                <span>Bonusingizni bilib oling</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer__alltext">
            2016-2022 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning
            ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga
            amal qiladi
          </div>
          <ul className="footer-payment">
            <li>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII="
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/_nuxt/img/intend.81957d2.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/_nuxt/img/payme.677630d.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
