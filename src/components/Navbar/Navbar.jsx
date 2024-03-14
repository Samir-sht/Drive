import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-links">
        <div className="logo">Drive</div>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className="btn">register</button>
      </nav>
    </>
  );
};

export default Navbar;
