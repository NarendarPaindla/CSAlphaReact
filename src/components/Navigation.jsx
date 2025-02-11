import React from 'react';
import '../styles.css'
function Navigation() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li><a href="#live">Live</a></li>
        <li><a href="#matches">Matches</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#series">Series</a></li>
        <li><a href="#videos">Videos</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;