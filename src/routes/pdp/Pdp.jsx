import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import HeaderBottom from "../../components/headerBottom/HeaderBottom";
import HeaderCenter from "../../components/headerCenter/HeaderCenter";
import Navbar from "../../components/headerNavbar/Navbar";
import "./Pdp.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const Pdp = () => {
  const id = useParams();

  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id.id}`)
      .then((response) => response.json())
      .then((data) => setSingleData(data));
  }, []);

  const [activeImageIndex, setActiveIndex] = useState(0);


  return (
    <>
      <Navbar />
      <HeaderCenter />
      <HeaderBottom />

      <div className="container">
        <ul className="menu-list">
            <li><Link to="/">Bosh sahifa</Link></li>
            <li><Link to="/">Mahsulotlar katalogi</Link></li>
            <li>{singleData?.title}</li>        
        </ul>

        <div className="pdp-wrapper">
          <div className="product-zoom">
            <img src={singleData?.images[activeImageIndex]} alt="" />

            <div className="active-images-box">
              {singleData?.images.map((e, id) => (
                <img
                  className="product-images"
                  src={e}
                  key={uuidv4()}
                  style={
                    id === activeImageIndex
                      ? {
                          border: " 3px solid #fbc100",
                          width: "110px",
                          height: "110px",
                          transition: ".3s",
                        }
                      : null
                  }
                  onClick={() => {
                    setActiveIndex(id);
                  }}
                  alt=""
                />
              ))}
            </div>
          </div>

          <div className="product-character">
            <h2>Mahsulot haqida qisqacha</h2>
            <div>
              <b>Model:</b> {singleData?.title}
            </div>
            <div>
              <b>Price:</b> {singleData?.price}
            </div>
            <div>
              <b>Description:</b> {singleData?.description}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pdp;