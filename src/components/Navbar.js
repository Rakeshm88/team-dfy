import React, { useState } from 'react';
// import logo from './assets/logo.jpg'; // Replace with your logo path
import './Navbar.css'
function Navbar({ selectedSection, setSelectedSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { key: 'home', label: 'Home' },
    { key: 'members', label: 'Members' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'events', label: 'Events' },
    { key: 'committee', label: 'Committee Details' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-main">
        {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
        <span className="navbar-title">DFY</span>
        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            
          <span />
          <span />
          <span />
        </button>
      </div>
      {/* Dropdown menu for mobile */}
      <div className={`navbar-dropdown${menuOpen ? ' open' : ''}`}>
        
        <ul>
          {pages.map(page => (
            <li
              key={page.key}
              className={selectedSection === page.key ? 'active' : ''}
              onClick={() => {
                setSelectedSection(page.key);
                setMenuOpen(false); // close menu after selection
              }}
            >{page.label}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
