import "./Experience.css";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="exp-container">

        <h2>Experience</h2>

        <div className="exp-card">

          <div className="exp-header">
            <h3>Frontend Developer Intern</h3>
            <span className="exp-duration">3 Months</span>
          </div>

          <p className="exp-company">Cyber Aries</p>

          <p className="exp-desc">
            Worked on building responsive web pages using React, CSS, and JavaScript.
            Implemented form handling, improved UI/UX, and optimized SEO for better performance.
          </p>

          <div className="exp-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>SEO</span>
            <span>GSAP</span>
            <span>Google form</span>
            <span>FormSpree</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;