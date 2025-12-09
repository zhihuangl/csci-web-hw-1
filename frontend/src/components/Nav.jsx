import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { loadUser, logoutUser } from "../services/user.js";
import brand from "../images/brand.png";
import { useEffect } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await loadUser();
      setUser(user);
      console.log("Loaded user:", user);
    }
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
  }

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
        <a href="/#gallery" className="nav-link">
          Gallery
        </a>
        <a href="/order" className="nav-link">
          Order
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
        {user ? (
          <a href='/' className="nav-link" onClick={handleLogout}>Logout</a>
        ) : (
          <a href="/login" className="nav-link">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Nav;
