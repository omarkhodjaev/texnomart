import React, { useEffect, useState } from 'react';
import c from "./HeaderBottom.module.css";
import {BiCategoryAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';
const HeaderBottom = () => {


  const[categoriesData,setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
    .then(response => response.json())
    .then(data => setCategoriesData(data))
  },[]);

  return (
    <div className={c.container}>
      <div className={c.header__bottom}>
          <button className={c.header__catalog__btn}>
              <span><BiCategoryAlt/></span>
              <span>Katalog</span>
          </button>

          <ul className={c.header__bottom__list}>
            {
              categoriesData.slice(0, 10).map(({name,id}) => 
                <li key={id}><Link to="/">{name}</Link></li>
              )
            }
          </ul>
      </div>
    </div>
  )
}

export default HeaderBottom