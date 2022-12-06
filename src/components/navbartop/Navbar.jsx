import React from 'react';
import c from "./Navbar.module.css";
import {TiLocationOutline} from "react-icons/ti";
import {IoEarthOutline} from "react-icons/io5" ;
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.container}>
        <div className={c.nav__wrapper}>
          <div className={c.nav__left}>
            <div className={c.location}>
              <button className={c.location__btn}>
                <span>
                  <TiLocationOutline className={c.location__btn__icon}/>
                </span>
                <span>Toshkent</span>
              </button>
              <div className={c.location__dropdown}>
                <ul>
                  <li>
                    <Link className={c.location__link} to="/" >
                      Toshkent
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      Namangan
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/" >
                      Samarqand
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      Jizzah
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      Xorazm
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      Buxoro
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            
            <div className={c.list}>
                <ul>
                    <li>
                        <Link to="/">Bizning do'konlarimiz</Link>
                    </li>

                    <li>
                        <Link to="/">B2B savdosi</Link>
                    </li>

                    <li>
                        <Link to="/">Muddatli to'lovga sotib olish</Link>
                    </li>

                    <li>
                        <Link to="/">To'lov usullari</Link>
                    </li>

                    <li>
                        <Link to="/">Mahsulotlar uchun kafolat</Link>
                    </li>

                </ul>
            </div> 

            

          </div> 


          <div className={c.nav__right}>
            <a className={c.call__center_wrapper}
             href="tel:+99871 209 99 44">
                <span>Aloqa markazi :</span>
                <span className={c.call__center}>
                    +99871 209 99 44
                </span>
            </a>

            <div className={c.language}>
                <IoEarthOutline className={c.language__icon}/>
                <select className={c.language__select}>
                    <option value="Uz">UZ</option>
                    <option value="Ru">RU</option>
                </select>

            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar