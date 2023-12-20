// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MEFAT WOOD</div>
      <nav className="navigation">
        <div className="menu-icon">☰</div>
        <div className="menu">
          <Link to="parquet" smooth={true} duration={1000} className="menu-item">Паркет</Link>
          <Link to="countertops" smooth={true} duration={1000} className="menu-item">Столешницы</Link>
          <Link to="tables" smooth={true} duration={1000} className="menu-item">Столы</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;