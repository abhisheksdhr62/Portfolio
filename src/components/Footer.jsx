import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>Abhishek</h2>
          <p>Frontend Developer building modern web experiences.</p>

          <p className="footer-status">🚀 Open to Work</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">
            <a href="https://github.com/abhisheksdhr62" target="_blank">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/abhishek-ranjan-8ab590216/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="mailto:abhisheksdhr62@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          
        </div>

      </div>
 <div className="footer-bottom">
        <p>© 2026 Abhishek. All rights reserved.</p>
      </div>
     
    </footer>
  );
};

export default Footer;