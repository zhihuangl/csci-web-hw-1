import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import brand from "../images/brand.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="nav">
      <a href="/" className="brand">
        <img src={brand} id="brand-logo" alt="Brand Logo" />
      </a>

      {/* Hamburger icon */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <GiHamburgerMenu />
      </button>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/#about" className="nav-link">
          About
        </a>
        <a href="/#menu" className="nav-link">
          Menu
        </a>
        <a href="#gallery" className="nav-link">
          Gallery
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
