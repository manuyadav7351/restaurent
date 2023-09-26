import React, { useRef, useState } from "react";
import "./popularDrink.scss";
import drink from "../../assets/trending/nathan-dumlao.jpg";

const PopularDrink = () => {
  const drinkConatinerRef = useRef(null);

  const prev = () => {
    drinkConatinerRef.current.scrollLeft -= 280;
  };

  const next = () => {
    drinkConatinerRef.current.scrollLeft += 280;
  };

  return (
    <>
      <div className="Drinks">
        <div className="divide">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
        <div className="drink-data">
          <div className="drink-heading">Drinks For You</div>
          <div className="drink-slider">
            <div className="drink-container" ref={drinkConatinerRef}>
              {/* <button onClick={handlePrevious}>Previous</button> */}
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
            </div>
          </div>
          <div className="scroll">
            <button className="drink-scroll" onClick={prev}>
              PREV
            </button>
            <button className="drink-scroll" onClick={next}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDrink;
