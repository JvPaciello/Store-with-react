import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        Guitar Info Center
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <Link to="/">Register Products</Link>
        <Link to="/">Login / Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
