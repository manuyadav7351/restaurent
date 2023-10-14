import React, { useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import "./coffeeMenu.scss";
import "../pages.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllWeekSpecial } from "../../store/features/weekSpecial/weekSpecialSlice";
import { selectAllCoffeeMenuItem } from "../../store/features/coffeeMenu/coffeeMenuSlice";
import { clearCoffee } from "../../store/features/coffeeMenu/coffeeMenuSlice";


const CoffeeMenu = () => {

    const dispatch = useDispatch();
    const coffeeItem = useSelector(selectAllCoffeeMenuItem);
    const navigate = useNavigate();

    // console.log(coffeeItem)

    const handleOrder = (Id) => {
        navigate('/order',  {state : Id})
    }

    useEffect(()=>{
        dispatch(clearCoffee());
    },[])

    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <div className="Coffee-Menu">
                        <div className="Coffee-Menu-top">
                            <h1>This Weeks Special</h1>
                        </div>
                        <div className="Coffee-Menu-bottom">
                            {coffeeItem.map((coffee) => (
                                <div
                                    className="Coffee-Menu-card"
                                    key={coffee.imageUrl}
                                >
                                    <img src={coffee.imageUrl} alt="" />
                                    <div className="Coffee-Menu-desc">
                                        <h3 className="name">
                                            {coffee.name}{" "}
                                            <span className="price">
                                                {coffee.price}{" "}
                                            </span>
                                        </h3>
                                        <button className="Order-Now" onClick={() => handleOrder(coffee.coffeeId)}>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeMenu;
