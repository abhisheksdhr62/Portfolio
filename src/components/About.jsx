import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h2>About Me</h2>

          <p className="about-text">
            I'm a passionate <span>Frontend Developer</span> focused on building
            responsive, interactive, and user-friendly web applications.
            I enjoy solving real-world problems and continuously improving my skills.
          </p>

          <p className="about-text">
            I work with modern technologies like React, JavaScript, and GSAP
            to create smooth and engaging user experiences.
          </p>

          {/* SERVICES */}
          <div className="about-services">
            <div className="service">🌐 Responsive Web Design</div>
            <div className="service">⚛️ React Development</div>
            <div className="service">🎨 UI / UX Improvement</div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="about-highlights">
            <div className="highlight">⚡ Fast Learner</div>
            <div className="highlight">💡 Problem Solver</div>
            <div className="highlight">🎯 Focused on Growth</div>
          </div>

          {/* CTA */}
          <a href="#contact" className="about-btn">
            Let's Connect →
          </a>
        </div>

        {/* RIGHT SIDE (DESIGN BLOCK) */}
        <div className="about-right">
          <div className="about-box">
            <h3>🚀 Building Modern UI</h3>
            <p>
              I create clean, modern and responsive interfaces with smooth animations.
            </p>
          </div>

          <div className="about-box">
            <h3>⚡ Performance Focused</h3>
            <p>
              Optimizing performance and ensuring fast load times is my priority.
            </p>
          </div>

          <div className="about-box">
            <h3>📈 Continuous Learning</h3>
            <p>
              Always learning new technologies and improving development skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;