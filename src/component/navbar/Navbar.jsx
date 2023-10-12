import React from "react";
import { FiUserPlus, FiUser } from "react-icons/fi";
import "./navbar.scss";
import { selectIsLoggedIn, selectAllUser, clearStorage} from "../../store/features/register/registerSlice";
import { useSelector } from "react-redux";
import { logout } from "../../store/features/register/registerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login')
    };

    const handleStorage = () => {
        dispatch(clearStorage())
    }
    
    const allUser = useSelector(selectAllUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // console.log("all user " ,allUser)
    // console.log("logged " , isLoggedIn)

    return (
        <div className="navbar">
            <div className="navbar-left" onClick={() => navigate("/")}>logo</div>
            <div className="navbar-right">
                <ul>
                    <li onClick={() => navigate("/")}>HOME</li>
                    <li onClick={() => navigate("/coffeemenu")}>COFFEE MENU</li>
                    <li onClick={() => navigate("/weekspecial")}>
                        WEEK SPECIAL
                    </li>
                    <li onClick={() => navigate("/contactus")}>CONTACT US</li>
                    {/* <li onClick={handleStorage}>Clear</li> */}
                    {isLoggedIn ? (
                        <>
                            <li onClick={() => navigate("/reviews")}>REVIEWS</li>
                            <li>ORDER</li>
                            <li>
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
