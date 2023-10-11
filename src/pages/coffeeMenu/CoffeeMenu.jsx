import React from "react";
import Navbar from "../../component/navbar/Navbar";
import "./coffeeMenu.scss";
import "../pages.scss"

const CoffeeMenu = () => {
    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <h1>title</h1>
                    <p>content</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeMenu;
