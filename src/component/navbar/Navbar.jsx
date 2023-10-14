import React, { useEffect, useState } from "react";
import { FiUserPlus, FiUser, FiArrowDown } from "react-icons/fi";
import "./navbar.scss";
import { selectIsLoggedIn} from "../../store/features/register/registerSlice";
import { useSelector } from "react-redux";
import { logout } from "../../store/features/register/registerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        swal({title: "Success!", text: "Logged Out Successfully!", icon: "warning", buttons: false});
        setTimeout(() => {
            swal.close();
        }, 3000);
        navigate('/login')
    };

    const isLoggedIn = useSelector(selectIsLoggedIn);


    const [navVisible, setNavVisible] = useState(false);
    const handleNavbar = () => {
        setNavVisible(!navVisible)
    }


    return (
        <div className="navbar">
            <div className="navbar-left" onClick={() => navigate("/")}>logo</div>

            <button className="navbar-hamburger" onClick={() => handleNavbar()}>< FiArrowDown /></button>

            <div className={`navbar-right ${navVisible ? "" : "nope"}`}>
                <ul>
                    <li onClick={() => navigate("/")}>HOME</li>
                    <li onClick={() => navigate("/coffeemenu")}>MENU</li>
                    <li onClick={() => navigate("/weekspecial")}>
                        WEEK SPECIAL
                    </li>
                    <li onClick={() => navigate("/contactus")}>CONTACT US</li>
                    {/* <li onClick={handleStorage}>Clear</li> */}
                    {isLoggedIn ? (
                        <>
                            <li onClick={() => navigate("/reviews")}>REVIEWS</li>
                            <li onClick={() => navigate("/cart")}>CART</li>
                            <li>ORDER</li>
                            <li onClick={() => navigate("/user")}>
                                <FiUser />
                            </li>
                            <li onClick={handleLogout}>LOGOUT</li>
                        </>
                    ) : (
                        <>
                            <li onClick={() => navigate("/login")}>LOGIN</li>
                            <li onClick={() => navigate("/register")}>
                                <FiUserPlus />
                            </li>
                        </>
                    )}
                </ul>
            </div> 
        </div>
    );
};

export default Navbar;
