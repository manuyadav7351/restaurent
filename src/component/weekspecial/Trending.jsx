import React from "react";
import "./trending.scss";
import tren from "../../assets/trending/eiliv-aceron.jpg";

const Trending = () => {
  return (
    <div className="trending">
      <div className="trending-bottom">
        {/* card */}
        <div className="trending-card">
          <img src={tren} alt="" />
          <div className="trending-price">Latte - $12.00</div>
          <button className="trending-orderNow">Order Now</button>
        </div>
        {/* card */}
        <div className="trending-card">
          <img src={tren} alt="" />
          <div className="trending-price">Latte - $12.00</div>
          <button className="trending-orderNow">Order Now</button>
        </div>
        {/* card */}
        <div className="trending-card">
          <img src={tren} alt="" />
          <div className="trending-price">Latte - $12.00</div>
          <button className="trending-orderNow">Order Now</button>
        </div>
        {/* card */}
      </div>
    </div>
  );
};

export default Trending;
