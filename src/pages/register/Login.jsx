import React from "react";
import "./login.scss";
import Navbar from "../../component/navbar/Navbar";
import "../pages.scss";
import {
    // selectAllUser,
    // selectIsLoggedIn,
    // selectCurrentUser,
    login,
    // logout,
} from "../../store/features/register/registerSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch =  useDispatch()
    const navigate = useNavigate();

    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        dispatch(login({email, password}))
        navigate('/')
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
                                <input type="email" placeholder="Email" onChange={handleSetEmail} />
                                <input type="password" placeholder="Password" onChange={handleSetPassword} />
                                <button className="submit" onClick={handleLogin}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
