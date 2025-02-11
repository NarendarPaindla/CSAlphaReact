import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h1>CricBuzz Clone</h1>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search" className="search-box" />
      </div>
    </header>
  );
}

export default Header;