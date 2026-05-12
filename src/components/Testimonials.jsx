import "./Testimonials.css";

const testimonials = [
  {
    name: "Tushar Patil",
    role: "Startup Founder",
    text: "Abhishek built a clean and responsive website. Great attention to detail and fast delivery."
  },
  {
    name: "Nikhil Mokal",
    role: "Internship Mentor",
    text: "Worked well with React and delivered high-quality UI with smooth user experience."
  },
  {
    name: "Priya Gaglani",
    role: "Developer",
    text: "Very dedicated and always eager to learn new technologies. Strong frontend skills."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <h2>What People Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p>"{t.text}"</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;