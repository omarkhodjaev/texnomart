import React from 'react';
import c from './HeaderCenter.module.css';
import {IoChevronDown} from "react-icons/io5";
import {HiOutlineMicrophone} from "react-icons/hi";
import {BiSearch,BiHeart} from "react-icons/bi";
import {BsBoxSeam} from "react-icons/bs";
import {SlUser,SlBasket} from "react-icons/sl";
import {RiScalesFill} from "react-icons/ri";
import {Link} from "react-router-dom";

const HeaderCenter = () => {
  return (
    <header>
      <div className={c.container}>
        <div className={c.header__center}>

          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="38"
              viewBox="0 0 230 38"
              fill="none"
            >
              <path
                d="M3.41893 31.6947V22.2107H0.914062V17.325H3.41893V12.2477H9.33042V17.325H14.24V22.2107H9.33042V30.7367C9.33042 32.0779 9.93159 32.6526 11.2341 32.6526C12.3363 32.6526 13.3382 32.3652 14.1398 31.9821V36.5804C12.9374 37.2509 11.4345 37.7299 9.43061 37.7299C5.8236 37.7299 3.41893 36.3888 3.41893 31.6947Z"
                fill="black"
              />
              <path
                d="M17.0449 27.3837C17.0449 21.6359 21.3533 16.9418 27.365 16.9418C34.3786 16.9418 37.5848 22.1149 37.5848 27.8627C37.5848 28.3417 37.5848 28.8207 37.4847 29.3955H22.9564C23.5576 31.982 25.4613 33.3232 28.0663 33.3232C30.0702 33.3232 31.473 32.7484 33.1763 31.3115L36.5829 34.1854C34.579 36.4846 31.7735 37.9215 28.0663 37.9215C21.6539 37.8257 17.0449 33.6106 17.0449 27.3837ZM31.7735 25.851C31.3728 23.2644 29.8699 21.6359 27.365 21.6359C24.8601 21.6359 23.257 23.3602 22.8562 25.851H31.7735Z"
                fill="black"
              />
              <path
                d="M46.4027 27.1921L39.2889 17.325H45.7013L49.6089 23.1686L53.5165 17.325H59.7286L52.6148 27.0963L60.0292 37.3467H53.6167L49.4085 31.1199L45.2004 37.3467H38.9883L46.4027 27.1921Z"
                fill="black"
              />
              <path
                d="M63.6348 17.325H69.5463V20.1989C70.949 18.4745 72.6523 16.9418 75.6581 16.9418C80.1669 16.9418 82.772 19.8157 82.772 24.414V37.3467H76.8605V26.2342C76.8605 23.5518 75.5579 22.1149 73.2535 22.1149C70.949 22.1149 69.5463 23.456 69.5463 26.2342V37.4425H63.6348V17.325Z"
                fill="black"
              />
              <path
                d="M86.9805 27.3837C86.9805 21.6359 91.7898 16.9418 98.4027 16.9418C104.915 16.9418 109.725 21.5401 109.725 27.3837C109.725 33.1316 104.915 37.8257 98.3025 37.8257C91.7898 37.8257 86.9805 33.2274 86.9805 27.3837ZM103.813 27.3837C103.813 24.414 101.609 21.8275 98.3025 21.8275C94.8959 21.8275 92.892 24.3182 92.892 27.3837C92.892 30.3535 95.0962 32.94 98.4027 32.94C101.809 32.94 103.813 30.4493 103.813 27.3837Z"
                fill="black"
              />
              <path
                d="M113.934 17.325H119.845V20.1989C121.248 18.4745 123.051 16.9418 126.057 16.9418C128.762 16.9418 130.867 18.0913 131.969 20.1031C133.772 18.0913 135.976 16.9418 138.882 16.9418C143.291 16.9418 145.996 19.5283 145.996 24.3182V37.3467H140.084V26.2342C140.084 23.5518 138.882 22.1149 136.578 22.1149C134.373 22.1149 132.971 23.456 132.971 26.2342V37.4425H127.059V26.2342C127.059 23.5518 125.857 22.1149 123.552 22.1149C121.348 22.1149 119.945 23.456 119.945 26.2342V37.4425H114.034V17.325H113.934Z"
                fill="black"
              />
              <path
                d="M149.803 31.5989C149.803 27.1922 153.31 25.1805 158.219 25.1805C160.323 25.1805 161.826 25.5636 163.329 26.0426V25.6594C163.329 23.2645 161.826 22.0191 158.82 22.0191C156.516 22.0191 154.913 22.4023 153.009 23.0729L151.506 18.762C153.811 17.804 156.115 17.1334 159.622 17.1334C162.828 17.1334 165.233 17.9956 166.736 19.3368C168.339 20.8695 169.04 23.0729 169.04 25.7552V37.3468H163.329V35.1434C161.926 36.6762 159.922 37.73 157.017 37.73C153.109 37.73 149.803 35.6224 149.803 31.5989ZM163.529 30.3535V29.2998C162.527 28.8208 161.225 28.5334 159.722 28.5334C157.217 28.5334 155.614 29.4914 155.614 31.4073C155.614 32.9401 156.917 33.8023 158.82 33.8023C161.626 33.8023 163.529 32.3653 163.529 30.3535Z"
                fill="black"
              />
              <path
                d="M174.25 17.3248H180.161V21.3484C181.364 18.5702 183.368 16.7501 186.875 16.9417V22.8811H186.574C182.666 22.8811 180.161 25.1803 180.161 29.9702V37.3466H174.25V17.3248Z"
                fill="black"
              />
              <path
                d="M191.583 31.6947V22.2107H189.078V17.325H191.583V12.2477H197.494V17.325H202.404V22.2107H197.494V30.7367C197.494 32.0779 198.096 32.6526 199.398 32.6526C200.5 32.6526 201.502 32.3652 202.304 31.9821V36.5804C201.102 37.2509 199.599 37.7299 197.595 37.7299C193.988 37.7299 191.583 36.3888 191.583 31.6947Z"
                fill="black"
              />
              <path
                d="M229.556 15.6006L226.551 20.4863L220.539 17.1334V23.8392H214.527V17.1334L208.516 20.4863L205.51 15.6006L211.622 12.2477L205.61 8.89475L208.516 4.00906L214.527 7.36198V0.656128H220.539V7.36198L226.551 4.00906L229.456 8.89475L223.445 12.2477L229.556 15.6006Z"
                fill="black"
              />
            </svg>
          </Link>

          <div className={c.header__search}>

            <div className={c.header__search__catalog}>
              <button className={c.search__catalog__btn}>

                <span>Barcha Imkoniyatlar</span>
                <IoChevronDown/>

              </button>
              <div className={c.search__catalog__dropdown}>
                <ul>
                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Barcha kategoriyalar
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Maishiy texnika
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Ofis jihoslari
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Oshxona uchun texnika
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Uy uchun idishlar
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Avtomobil uchun mahsulotlar
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Iqlim texnikasi
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Televizor va telekartalar
                    </a>
                  </li>

                  <li>
                    <a
                      className={c.catalog__link}
                      href="/"
                    >
                      Telefon Gadjetlar
                    </a>
                  </li>

                </ul>
              </div>
            </div>

            <div className={c.search__left}>
                <input  type="search"/>
                <button className={c.search__micro__btn}>
                  <HiOutlineMicrophone 
                  className={c.search__micro}/>
                </button>
            </div>
            
            <button className={c.search__icon__btn}>
              <BiSearch className={c.search__icon}/>
            </button>

          </div>

          <div className={c.header__right}>
              <Link to="/">
                <div>
                  <BsBoxSeam/>
                </div>
                <span>Buyurtma Holati</span>
              </Link>

              <button to="/">
                <div>
                  <SlUser/>
                </div>
                <span>Kirish</span>
              </button>

              <Link to="/">
                <div>
                  <RiScalesFill/>
                </div>
                <span>Taqoslash</span>
              </Link>

              <Link to="/">
                <div>
                  <BiHeart/>
                </div>
                <span>Sevimlilar</span>
              </Link>

              <button to="/">
                <div>
                  <SlBasket/>
                </div>
                <span>Savatcha</span>
              </button>
              
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCenter