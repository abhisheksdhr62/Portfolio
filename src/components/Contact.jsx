import "./Contact.css";
import { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {

      const response = await fetch(
        "https://formspree.io/f/xaqvpyqv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setShowMessage(true);
        form.reset();
      } else {
        alert("Something went wrong.");
      }

    } catch (error) {
      alert("Error submitting form");
    }
    setLoading(false);
  };

  // GSAP ANIMATION
  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      gsap.from(".contact-heading", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
        }
      });

      gsap.from(".contact-subtext", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
        }
      });

      gsap.from(".contact-form", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
        }
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h1 className="contact-heading">
            Let’s <span>Work</span> Together
          </h1>

          <p className="contact-subtext">
            Have a project in mind or want to collaborate?
            I'm always open to new opportunities.
          </p>

          <div className="contact-info">
            <p>📩 abhisheksdhr62@gmail.com</p>
            <p>📍 India</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

         <button type="submit" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>

        </form>

      </div>

      {/* SUCCESS POPUP */}
      {showMessage && (

        <div className="success-popup">

          <div className="popup-content">

            <h3>✅ Message Sent!</h3>

            <p>
              Thank you for contacting me.
              I will get back to you soon.
            </p>

            <button onClick={() => setShowMessage(false)}>
              Close
            </button>

          </div>

        </div>

      )}

    </section>
  );
};

export default Contact;