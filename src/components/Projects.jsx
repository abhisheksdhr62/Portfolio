import "./Projects.css";
import skincare from "../../src/assets/skincare.png"
import landing from "../../src/assets/landing.png"
import animatedpage from "../../src/assets/animated-page.png"
const projects = [
  {
    title: "Skincare Landing Page",
    desc: "Responsive landing page built with React and modern CSS.",
    tech: ["React", "Tailwind CSS"],
    live: "https://preeminent-zuccutto-a86e5b.netlify.app/",
    github: "https://github.com/abhisheksdhr62/Skincare-product-website-design",
    img: skincare
  },
  {
    title: "Animated Landing Page",
    desc: "An Animated Landing page using HTML, Gsap and css.",
    tech: ["HTML","Gsap", "CSS"],
    live: "#",
    github: "#",
    img: animatedpage
  },
  {
    title: "Landing Page for Startups",
    desc: "Interactive web landing page using React logic and Tailwind css.",
    tech: ["React","Tailwind CSS"],
    live: "https://celebrated-licorice-3eb670.netlify.app/",
    github: "#",
    img: landing
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.live} target="_blank">Live</a>
                  <a href={project.github} target="_blank">GitHub</a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;