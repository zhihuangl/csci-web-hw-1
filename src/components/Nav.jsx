import { GiBoba } from "react-icons/gi";

const Nav = () => {
  return (
    <nav id="nav">
      <div className="brand">
        <GiBoba id="brand-logo"/>
        <h2>Boba</h2>
      </div>
      <div className="nav-links">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/#about" className="nav-link">
          About
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
