import React from "react";
import "./login.scss";
import Navbar from "../../component/navbar/Navbar";
import "../pages.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/features/register/registerSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleRegister = () => {
        if(name && email && password){
            dispatch(register({name , email, password}))
            navigate('/')
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
                            <h1>Registration Form</h1>
                            <form action="#">
                                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <button className="submit" onClick={handleRegister}>Submit</button>
                                <button className="submit" >CLEAR</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
