import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
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
        <li>
          <Link to="/">
            DOUBLE <span> S </span>ENTERPRISES
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
