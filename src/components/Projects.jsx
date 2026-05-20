import libraryImg from "../assets/library.png";
import angularImg from "../assets/angular.png";
import ppconsImg from "../assets/ppcons.png";
import cylinderImg from "../assets/cylinder.png";
import { motion } from "framer-motion";

import {
  FaExternalLinkAlt,
  FaBook,
  FaBuilding,
  FaFire,
  FaOilCan,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Student Management System For Library",
      image: libraryImg,
      icon: <FaBook />,
      desc: "A full-stack library management system built with React.js, Flask, REST APIs and MySQL. It helps in managing students, books, transactions and generating reports efficiently.",
      tech: ["React.js", "Flask", "MySQL", "REST API", "Python"],
      live: "https://studyroom.zerlak.com/",
      color: "purple",
    },

    {
      title: "Angular Engineering Website",
      image: angularImg,
      icon: <FaBuilding />,
      desc: "A modern and responsive website for an engineering company showcasing services, products and company information with a professional UI.",
      tech: ["React.js", "Responsive UI", "Modern Design", "Deployment"],
      live: "https://angular-engineering.in/",
      color: "blue",
    },

    {
      title: "PPCONS Automation LLP",
      image: ppconsImg,
      icon: <FaFire />,
      desc: "Corporate website for a fire protection solutions company. Built to highlight services like fire safety system design, installation and maintenance.",
      tech: ["React.js", "Corporate UI", "Fire Safety", "Responsive"],
      live: "https://ppcons.in/",
      color: "red",
    },

    {
      title: "Cylinder Tracking Web Application",
      image: cylinderImg,
      icon: <FaOilCan />,
      desc: "A web-based application to track industrial gas cylinders, manage inventory, transactions and monitor real-time status efficiently.",
      tech: ["React.js", "Flask", "MySQL", "REST API", "Inventory"],
      live: "https://cylindertracking.zerlak.com/login",
      color: "green",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      id="projects" 
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 className="project-heading" variants={cardVariants}>
        My <span>Projects</span>
      </motion.h2>

      <motion.p className="project-subheading" variants={cardVariants}>
        Here are some of my recent projects. Each project is built
        with passion and attention to detail.
      </motion.p>

      <div className="project-line"></div>

      <motion.div className="project-grid" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div 
            className={`project-card ${project.color}`} 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.live} target="_blank" rel="noreferrer" className="view-btn">
                  <FaExternalLinkAlt /> View Demo
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;