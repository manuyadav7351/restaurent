import React from "react";
import "./login.scss";
import Navbar from "../../component/navbar/Navbar";
import "../pages.scss";
import {
    selectAllUser,
    selectIsLoggedIn,
    login,
    // logout,
} from "../../store/features/register/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleSetPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        try {
            dispatch(login({ email, password }));
            swal({title: "Success!", text: "Logged In Successfully!", icon: "success", buttons: false});
            setTimeout(() => {
                swal.close();
                navigate('/');
            }, 3000);
        } catch (error) {
            swal({title: "Error!", text: "Invalid credentials. Please try again.", icon: "error", buttons: false});
            setTimeout(() => {
                swal.close();
            }, 2000);
        }
    }

    return (
        <div className="coffee-page">
            <div className="page-navbar">
                <Navbar />
            </div>
            <div className="coffee-page-content">
                <div className="page-content">
                    <div className="register">
                        <div className="register-container">
                            <h1>Login Form</h1>
                            <form action="#">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleSetEmail}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleSetPassword}
                                />
                                <button
                                    className="submit"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
