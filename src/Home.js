import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/*Product ID,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="12343223"
          title="Xiomi Redmi Note 9 pro"
          price={11999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81tsVlabe%2BL._SX679_.jpg"
        />

        <Product
          id="12343223"
          title="Short Sleeves Slim Fit Lt.Olive Coloured Men's T-Shirt"
          price={629}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51gwmcAREmL._UL1100_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12343223"
          title="JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Blue)"
          price={2999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/612Rldd5TuL._SL1500_.jpg"
        />

        <Product
          id="12343223"
          title="Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black "
          price={3499}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._SL1500_.jpg"
        />

        <Product
          id="12343223"
          title="ASUS VivoBook 14 X409JA-EK591T 14.0-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Windows 10 Home (64bit)"
          price={58599}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/310L-%2Bu1lDL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12343223"
          title="Samsung 109 cm (43 inches) 4K Ultra HD Smart LED TV UA43TU7200KBXL"
          price={44000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91wi8mnuP7L._SL1500_.jpg"
        />
      </div>

      {/*Product */}
    </div>
  );
}

export default Home;
