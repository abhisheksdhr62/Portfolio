import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
    
        <h2 className="logo">Abhishek</h2>
         {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li style={{ animationDelay: "0.1s" }}><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li style={{ animationDelay: "0.1s" }}><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li style={{ animationDelay: "0.1s" }}><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li style={{ animationDelay: "0.1s" }}><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li style={{ animationDelay: "0.1s" }}><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li style={{ animationDelay: "0.1s" }}><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;