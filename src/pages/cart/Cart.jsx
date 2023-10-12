import React from "react";
import "./cart.scss";
import "../pages.scss";
import Navbar from "../../component/navbar/Navbar";

const Cart = () => {
    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <div className="cart">
                        <div className="cart-top">
                            <div className="heading">My Cart</div>
                        </div>
                        <div className="cart-bottom">
                            <div className="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Desc</th>
                                            <th>Quantity</th>
                                            <th>Remove</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>d</th>
                                            <th>q</th>
                                            <th>r</th>
                                            <th>p</th>
                                        </tr>
                                        <tr>
                                            <th>d</th>
                                            <th>q</th>
                                            <th>r</th>
                                            <th>p</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="order-now">
                                <h1>Total Price : $23</h1>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
