import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import ResumeViewer from './ResumeViewer'

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const containerVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

const resumeUrl = '/resume/Vedant-Gajbe-Resume.pdf'

export default function ResumeModal({ onClose }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    // Disable body scroll while modal is open. Restore on cleanup.
    document.body.style.overflow = 'hidden'

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return createPortal(
    <motion.div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleBackdropClick}
      variants={overlayVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.22 }}
    >
      <motion.div
        className="modal-container"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <header className="modal-header">
          <div className="modal-meta">
            <h3>Vedant Gajbe — Resume</h3>
            <p className="sub">Full Stack • React • Python</p>
          </div>

          <div className="modal-actions">
            <a
              href={resumeUrl}
              download="Vedant-Gajbe-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn modal-download"
            >
              Download Resume
            </a>

            <button
              className="btn-outline"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              Open Full Screen
            </button>

            <button
              aria-label="Close resume preview"
              className="modal-close"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        </header>

        <main className="modal-body">
          <ResumeViewer src={resumeUrl} />
        </main>

        <div className="modal-footer">
          <div className="footer-actions">
            <a
              href={resumeUrl}
              download="Vedant-Gajbe-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn modal-download"
            >
              Download Resume
            </a>

            <button
              className="btn-outline"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              Open Full Screen
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}
