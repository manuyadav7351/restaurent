import React, { useEffect } from "react";
import "./order.scss";
import { useLocation } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCoffeeById, selectedCoffeeById } from "../../store/features/coffeeMenu/coffeeMenuSlice";


const Order = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.state;

    useEffect(()=>{
        dispatch(getCoffeeById({id}));
    }, [dispatch, id])

    const coffee = useSelector(selectedCoffeeById);    

    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <div className="coffee-desc">
                        <div className="coffee-heading">Place Order</div>
                        <div className="coffee-desc-top">
                            <div className="coffee-top-left">
                                <img src={coffee.imageUrl} alt="one" />
                            </div>
                            <div className="coffee-top-right">
                                <div className="div-top-right-content">
                                    <div className="coffee-top-name">Name - {coffee.name}</div>
                                    <div className="coffee-top-desc">DESC - </div>
                                    <div className="coffee-top-ingre">
                                        INGREDIENT -
                                    </div>
                                    <div className="coffee-top-name">Price - {coffee.price}</div>
                                </div>
                            </div>
                        </div>
                        <div className="coffee-desc-bottom">
                            <button className="coffee-button">
                                add to cart
                            </button>
                            <button className="coffee-button">order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
