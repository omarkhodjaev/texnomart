import React, { useEffect} from 'react';
import c from "./Navbar.module.css";
import {TiLocationOutline} from "react-icons/ti";
import {IoEarthOutline} from "react-icons/io5" ;
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {

  const { i18n, t } = useTranslation(["home"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("uz");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};
  

  
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
                <span>{t("Toshkent")}</span>
              </button>
              <div className={c.location__dropdown}>
                <ul>
                  <li>
                    <Link className={c.location__link} to="/" >
                      {t("Toshkent")}
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      {t("Namangan")}
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/" >
                      {t("Samarqand")}
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      {t("Jizzah")}
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      {t("Xorazm")}
                    </Link>
                  </li>

                  <li>
                    <Link className={c.location__link} to="/">
                      {t("Buxoro")}
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            
            <div className={c.list}>
                <ul>
                    <li>
                        <Link to="/">{t("Bizning do'konlarimiz")}</Link>
                    </li>

                    <li>
                        <Link to="/">{t("B2B savdosi")}</Link>
                    </li>

                    <li>
                        <Link to="/">{t("Muddatli to'lovga sotib olish")}</Link>
                    </li>

                    <li>
                        <Link to="/">{t("To'lov usullari")}</Link>
                    </li>

                    <li>
                        <Link to="/">{t("Mahsulotlar uchun kafolat")}</Link>
                    </li>

                </ul>
            </div> 

            

          </div> 


          <div className={c.nav__right}>
            <a className={c.call__center_wrapper}
             href="tel:+99871 209 99 44">
                <span>{t("Aloqa markazi :")}</span>
                <span className={c.call__center}>
                    +99871 209 99 44
                </span>
            </a>

            <div className={c.language}>
                <IoEarthOutline className={c.language__icon}/>
                <select  
                 value={localStorage.getItem("i18nextLng")}
                 onChange={handleLanguageChange}
                 className={c.language__select}>
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