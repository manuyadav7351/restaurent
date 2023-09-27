import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register-container">
        <h1>Registration Form</h1>
        <form action="#">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
