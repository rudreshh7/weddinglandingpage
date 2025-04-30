import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "/images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Mobile Logo */}
        <div className="mobile-logo">
          <Link className="nav-home-link" to="/">
            <span className="logo-text-group">
              <img src={Logo} alt="logo" className="logo" />
              <span className="text mobile-logo-text">DOUBLE ENTERPRISES</span>
            </span>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Desktop Nav */}
        <ul className="nav-list desktop-nav">
          {/* <li className="nav-list-item">
            <Link to="/">HOME</Link>
          </li> */}
          <li className="nav-list-item">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/services">SERVICES</Link>
          </li>
          <li className="nav-list-item nav-home">
            <Link className="nav-home-link" to="/">
              <span className="logo-text-group">
                <span className="text">DOUBLE</span>
                <img src={Logo} alt="logo" className="logo" />
                <span className="text">ENTERPRISES</span>
              </span>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/decor">GALLERY</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/plan">PLANNING</Link>
          </li>
          {/* <li className="nav-list-item">
            <Link to="https://www.instagram.com/weddingsby_double_s?igsh=MWN5OGtmYjRhY2VvYg%3D%3D&utm_source=qr">
              CONTACT
            </Link>
          </li> */}
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <Link to="/" onClick={closeMenu} className="mobile-menu-logo">
              <img src={Logo} alt="logo" className="logo" />
              <div className="mobile-logo-text">DOUBLE S ENTERPRISES</div>
            </Link>
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/plan" onClick={closeMenu}>
                  Plan
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/decor" onClick={closeMenu}>
                  Decor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
