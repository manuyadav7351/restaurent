import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="register">
      <div className="register-container">
        <h1>Login Form</h1>
        <form action="#">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
