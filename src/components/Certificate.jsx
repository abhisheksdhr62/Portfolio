import "../../src/components/Certificate.css"

import reactCert from "../../src/assets/NullClass-undefined-Training-Certificate.png";
import jsCert from "../../src/assets/js certificate.jpeg";
import HTML from "../../src/assets/Html course certificate.jpeg";
import CSS from "../../src/assets/CSS course certificate.jpeg"

const certificates = [
  {
    title: "Full Stack Web Deveplopment",
    issuer: "Nullclass",
    image: reactCert,
  },
  {
    title: "Master in Javascript",
    issuer: "Code With Random",
    image: jsCert,
  },
  {
    title: "HTMLCourse",
    issuer: "SoloLearn",
    image: HTML,
  },
  {
    title: "HTMLCourse",
    issuer: "SoloLearn",
    image: CSS,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">

      <div className="certificates-container">

        <h2>Certificates</h2>

        <div className="certificate-grid">

          {certificates.map((cert, index) => (

            <div className="certificate-card" key={index}>

              <img
                src={cert.image}
                alt={cert.title}
              />

              <div className="certificate-content">

                <h3>{cert.title}</h3>

                <p>{cert.issuer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certificates;