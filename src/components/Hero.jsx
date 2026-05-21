import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ResumeButton from './ResumeButton'

import heroImg from "../assets/hero.png";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-tag"
        >
          AVAILABLE FOR WORK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span>Vedant Gajbe</span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Python Developer",
            2000,
            "Frontend Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="hero-desc"
        >
          Passionate Full Stack Developer skilled in
          React.js, Flask, Python and MySQL.
          I build modern, responsive and scalable
          web applications with premium UI/UX.
        </motion.p>

        <div className="hero-buttons">

          <a href="#projects" className="btn">
            View Projects
          </a>

          {/* Resume preview button opens modal instead of direct download */}
          <ResumeButton className="btn-outline" />

        </div>

        <div className="hero-socials">

          <a href="https://github.com/vedantgajbe5866">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/vedantgajbe10?utm_source=share_via&utm_content=profile&utm_medium=member_android">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/vedant_gajbe_vg1210?igsh=YmRqbHU4bzMyMXlo">
            <FaInstagram />
          </a>

        </div>

      </div>

      <motion.div
        className="hero-right"

        initial={{ opacity: 0, scale: 0.8 }}

        animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 1 }}
      >

        <div className="hero-image-box">

          <img src={heroImg} alt="Vedant" />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;