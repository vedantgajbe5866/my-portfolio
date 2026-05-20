import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = ['About', 'Projects', 'Skills', 'Contact']

const menuItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('About')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          Vedant.
        </a>

        <nav className="navbar-desktop" aria-label="Primary navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link} className={`navbar-item ${activeLink === link ? 'active' : ''}`}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navbar-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-overlay"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIsOpen(false)}
          >
            <motion.ul
              className="overlay-links"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {navLinks.map((link) => (
                <motion.li key={link} className="overlay-item" variants={menuItemVariants}>
                  <a
                    className={`overlay-link ${activeLink === link ? 'active' : ''}`}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => {
                      setActiveLink(link)
                      setIsOpen(false)
                    }}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
