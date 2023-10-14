import React, { useEffect, useRef } from "react";
import "./popularDrink.scss";
import { clearCoffee, selectAllCoffeeMenuItem } from "../../store/features/coffeeMenu/coffeeMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PopularDrink = () => {
    const dispatch = useDispatch();
    const coffeeMenu = useSelector(selectAllCoffeeMenuItem);
    const navigate = useNavigate();
    const drinkConatinerRef = useRef(null);
    const prev = () => {
        drinkConatinerRef.current.scrollLeft -= 280;
    };
    const next = () => {
        drinkConatinerRef.current.scrollLeft += 280;
    };

    const handleOrder = (Id) => {
        navigate('/order',  {state : Id})
    }

    useEffect(()=>{
        dispatch(clearCoffee());
    },[])

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
                        <div
                            className="drink-container"
                            ref={drinkConatinerRef}
                        >
                            {/* <button onClick={handlePrevious}>Previous</button> */}
                            {/* cards */}
                            {coffeeMenu.map((coffee) => (
                                <div
                                    className="drink-card-coffee"
                                    key={coffee.imageUrl}
                                >
                                    <div className="drink-card-image">
                                        <img src={coffee.imageUrl} alt="" />
                                    </div>
                                    <div className="drink-card-desc">
                                        <div className="drink-name">
                                            {coffee.name}{" "}
                                            <span>${coffee.price}</span>
                                        </div>

                                        <div className="drink-order">
                                            <button onClick={() => handleOrder(coffee.coffeeId)}>Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* cards */}
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
