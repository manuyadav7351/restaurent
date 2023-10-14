import React from "react";
import "./user.scss";
import "../pages.scss";
import Navbar from "../../component/navbar/Navbar";

const User = () => {
    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <div className="cart">
                        <div className="cart-top">
                            <div className="heading">User Profile</div>
                        </div>
                        <div className="cart-bottom">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
