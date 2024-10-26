import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Guitar info center
      </Link>
      <nav className="navbar">
        <Link to="/">Register Products</Link>
        <Link to="/">Login / Sign Up</Link>
      </nav>
    </header>
  );
}
export default Header;
