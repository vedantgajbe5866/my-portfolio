import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-top">

        <p className="contact-tag">
          CONTACT ME
        </p>

        <h2>
          Let's Work Together
        </h2>

        <p className="contact-subtext">
          I’m available for Full Stack Development,
          React.js projects and freelance opportunities.
          Feel free to connect with me.
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <div className="contact-card">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>Email</span>
              <p>gajbevedant1007@gmail.com</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon purple">
              <FaPhoneAlt />
            </div>

            <div>
              <span>Phone</span>
              <p>+91 9130887619</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon blue">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span>Location</span>
              <p>Pune, Maharashtra, India</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          <h3>Connect With Me</h3>

          <div className="social-grid">

            <a
              href="https://github.com/vedantgajbe5866"
              target="_blank"
              rel="noreferrer"
              className="social-box"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vedantgajbe10?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="social-box"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

          <a
            href="/resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;