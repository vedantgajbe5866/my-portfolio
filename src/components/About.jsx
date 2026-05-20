import {
  FaReact,
  FaPython,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        <div className="about-left">

          <p className="about-tag">
            ABOUT ME
          </p>

          <h2>
            Passionate Full Stack Developer
          </h2>

          <p className="about-desc">
            Motivated and detail-oriented Computer Science graduate
            with hands-on experience in Full Stack Development
            using React.js and Python Flask.
          </p>

          <p className="about-desc">
            Skilled in building responsive web applications,
            RESTful APIs, database management and scalable
            frontend architectures with modern UI/UX.
          </p>

          <div className="about-info">

            <div className="info-box">
              <span>Name</span>
              <p>Vedant Santosh Gajbe</p>
            </div>

            <div className="info-box">
              <span>Email</span>
              <p>vedantgajbe5866@gmail.com</p>
            </div>

            <div className="info-box">
              <span>Location</span>
              <p>Pune, India</p>
            </div>

            <div className="info-box">
              <span>Education</span>
              <p>B.E Computer Science</p>
            </div>

          </div>

        </div>

        <div className="about-right">

          <div className="about-card">

            <div className="about-icon">
              <FaReact />
            </div>

            <h3>Frontend Development</h3>

            <p>
              Building responsive and scalable web
              applications using React.js,
              JavaScript, HTML and CSS.
            </p>

          </div>

          <div className="about-card">

            <div className="about-icon purple">
              <FaPython />
            </div>

            <h3>Backend Development</h3>

            <p>
              Developing RESTful APIs and backend
              systems using Python Flask
              and database integration.
            </p>

          </div>

          <div className="about-card">

            <div className="about-icon green">
              <FaDatabase />
            </div>

            <h3>Database Management</h3>

            <p>
              Managing MySQL databases,
              optimizing queries and handling
              efficient data storage systems.
            </p>

          </div>

          <div className="about-card">

            <div className="about-icon orange">
              <FaChartBar />
            </div>

            <h3>Data Analytics</h3>

            <p>
              Creating dashboards and
              data-driven insights using
              Power BI, Excel and Python.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;