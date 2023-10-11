import React, { useRef } from "react";
import "./popularDrink.scss";
import { selectAllCoffeeMenuItem } from "../../store/features/coffeeMenu/coffeeMenuSlice";
import { useSelector } from "react-redux";

const PopularDrink = () => {
    const coffeeMenu = useSelector(selectAllCoffeeMenuItem);
    console.log(coffeeMenu);

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
                                            <button>Order Now</button>
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
