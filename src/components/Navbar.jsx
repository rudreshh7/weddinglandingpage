import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "/images/Logo.png";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-home">
          <Link className="nav-home-link" to="/">
            <span className="logo-text-group">
              <span className="text">DOUBLE</span>
              <img src={Logo} alt="logo" className="logo" />
              <span className="text">ENTERPRISES</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/plan">Plan</Link>
        </li>
        <li>
          <Link to="/decor">Decor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
