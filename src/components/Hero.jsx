import { useEffect, useState } from "react";
import "./Hero.css";
import resume from "../../src/assets/New Resume.pdf";
const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Developer"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }

      if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          Hi, I'm <span>Abhishek</span>
        </h1>

        <h2 className="typing-text">{text}</h2>

        <p>
          I build responsive and interactive web applications using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href={resume} target="_blank" className="btn secondary">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;