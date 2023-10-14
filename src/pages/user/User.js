import React from "react";
import "./user.scss";
import "../pages.scss";
import Navbar from "../../component/navbar/Navbar";
import { selectIsLoggedIn } from "../../store/features/register/registerSlice";
import { useSelector } from "react-redux";

const User = () => {

    const user = useSelector(selectIsLoggedIn);

    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <div className="user">
                        <div className="user-top">
                            <div className="heading">User Profile</div>
                        </div>
                        <div className="user-bottom">
                            <div className="user-bottom-desc">
                                <div className="user-info">Name : {user.name}</div>
                                <div className="user-info">Email : {user.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
