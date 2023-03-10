import React from 'react';
import './Styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/games">Games</a></li>
        <li><a href="/players">Players</a></li>
        <li><a href="/standings">Standings</a></li>
        <li><a href="/leaders">Leaders</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
