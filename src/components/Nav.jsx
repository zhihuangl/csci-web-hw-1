const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="" alt="logo" />
        <h2>MySite</h2>
      </div>
      <div className="links">
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
