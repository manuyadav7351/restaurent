import React from "react";
import "./login.scss";
import Navbar from "../../component/navbar/Navbar";
import "../pages.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/features/register/registerSlice";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { icons } from "react-icons";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const isValidPassword = (password) => {
        if (password.length < 6) {
            return false; // Password is too short
        }
        const hasNumber = /\d/.test(password)
        const hadLetter = /[a-zA-Z]/.test(password)
        return hadLetter && hasNumber;
    }

    const handleRegister = () => {
        if(name && isValidEmail(email) && isValidPassword(password)){
            dispatch(register({name , email, password}))
            swal({title : "Success" , text : "Registration Successfull" , icon : "success" , buttons : false})
            setTimeout(() => {
                swal.close();
            }, 3000)
            navigate('/login');
        }
        else{
            swal({title : "INVALID CREDENTIAL" ,text : "-> check you mail and password \n -> password must 6 char long \n -> password must contain one letter and one number" , icons : "error"})
            setEmail('')
            setPassword('')
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
