import React, { useState } from "react";
import "./popularDrink.scss";
import drink from "../../assets/trending/nathan-dumlao.jpg";

const PopularDrink = () => {


  return (
    <>
      <div className="Drinks">
        <div className="divide">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
        <div className="drink-data">
          <div className="drink-heading">Drinks For You</div>
          <div className="drink-container">
          {/* <button onClick={handlePrevious}>Previous</button> */}
            <div className="drink-list">
              {/* cards */}
              <div className="drink-card" key={1}>
                <img src={drink} alt="" />
                <div className="drink-name">
                  Latte <span>$23</span>
                </div>
                <div className="drink-order">
                  <button>Order Now</button>
                </div>
              </div>
              {/* cards */}
              {/* cards */}
              <div className="drink-card" key={2}>
                <img src={drink} alt="" />
                <div className="drink-name">
                  Latte <span>$23</span>
                </div>
                <div className="drink-order">
                  <button>Order Now</button>
                </div>
              </div>
              {/* cards */}
              {/* cards */}
              <div className="drink-card" key={3}>
                <img src={drink} alt="" />
                <div className="drink-name">
                  Latte <span>$23</span>
                </div>
                <div className="drink-order">
                  <button>Order Now</button>
                </div>
              </div>
              {/* cards */}
              {/* cards */}
              <div className="drink-card" key={4}>
                <img src={drink} alt="" />
                <div className="drink-name">
                  Latte <span>$23</span>
                </div>
                <div className="drink-order">
                  <button>Order Now</button>
                </div>
              </div>
              {/* cards */}
              {/* cards */}
              <div className="drink-card" key={5}>
                <img src={drink} alt="" />
                <div className="drink-name">
                  Latte <span>$23</span>
                </div>
                <div className="drink-order">
                  <button>Order Now</button>
                </div>
              </div>
              {/* cards */}
              
            </div>
            {/* <button onClick={handleNext}>Next</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDrink;
