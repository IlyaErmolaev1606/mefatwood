import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MEFAT WOOD</div>
      <nav className="navigation">
        <div className="menu-icon">☰</div>
        <div className="menu">
          <a href="#parquet">Паркет</a>
          <a href="#countertops">Столешницы</a>
          <a href="#tables">Столы</a>
        </div>
      </nav>
    </header>
  );
}