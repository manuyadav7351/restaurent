import React from "react";
import "./trending.scss";
import { useSelector } from "react-redux";
import { selectAllWeekSpecial } from "../../store/features/weekSpecial/weekSpecialSlice";

const Trending = () => {

  const weekSpecial = useSelector(selectAllWeekSpecial);

  return (
    <div className="trending">
      <div className="trending-top">This weeks Special</div>
      <div className="trending-bottom">
        {weekSpecial.map( (coffee) => (
          <div className="trending-card" key={coffee.weekSpecialId}>
          <img src={coffee.imageUrl} alt="" />
          <div className="trending-price">{coffee.name} - ${coffee.price}</div>
          <button className="trending-orderNow">Order Now</button>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
