import React from "react";
import {FiUserPlus, FiUser} from "react-icons/fi"
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">logo</div>
      <div className="navbar-right">
        <ul>
          <li>HOME</li>
          <li>COFFEE</li>
          <li>SPECIAL</li>
          <li>CONTACT US</li>
          <li>USER</li>
          <li>LOGIN</li>
          <li><FiUserPlus /></li>
          <li><FiUser /></li>
          {/* <li>LOGOUT</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
