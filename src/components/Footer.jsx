import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'

const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']
const socials = [
  { label: 'GitHub', icon: <FaGithub />, href: 'https://github.com/vedantgajbe5866' },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vedantgajbe10?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { label: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/vedant_gajbe_vg1210?igsh=YmRqbHU4bzMyMXlo' },
  { label: 'Email', icon: <FiMail />, href: 'gajbevedant1007@gmail.com' },
  { label: 'Contact', icon: <FiPhone />, href: 'tel:+919130887619' }
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg" aria-hidden="true">
        <span className="footer-glow footer-glow-cyan" />
        <span className="footer-glow footer-glow-purple" />
        <span className="footer-grid" />
      </div>

      <motion.div
        className="footer-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        variants={fadeUp}
      >
        <div className="footer-brand">
          <h2 className="footer-logo">Vedant</h2>
          <p className="footer-description">
            Passionate Full Stack Developer building modern responsive and scalable web applications with premium UI/UX experiences.
          </p>
        </div>

        <div className="footer-socials">
          {socials.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="social-button"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
      </motion.div>

      <div className="footer-bottom">
        <p>© 2026 Vedant Gajbe. All Rights Reserved.</p>
        <p>Built with React.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}
