import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Adjust the path if necessary

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="CadeWebDesign Logo" style={{ height: '50px' }} />
      </div>
      <div className="logo-caption">
        Cade Web Design
    </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
