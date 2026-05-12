import "./Skills.css";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "GSAP", level: 70 },
  { name:"Tailwind CSS", level:60 },
  { name:"BootStrap CSS", level: 50 },
  { name:"Generative AI", level: 60 },

];

const Skills = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      gsap.utils.toArray(".skill").forEach((skill) => {
        const bar = skill.querySelector(".skill-progress");
        const value = bar.getAttribute("data-width");

        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: value,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skill,
              start: "top 90%",
              once: false
            }
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2>My Skills</h2>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  data-width={`${skill.level}%`}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;