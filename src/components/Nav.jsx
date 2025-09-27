import { GiBoba } from "react-icons/gi";
import brand from "../images/brand.png"

const Nav = () => {
  return (
    <nav id="nav">
      <a href="/" className="nav-link">
        <div className="brand">
          <img src={brand} id="brand-logo" />
        </div>
      </a>
      <div className="nav-links">
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
