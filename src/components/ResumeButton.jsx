import { useState } from 'react'
import ResumeModal from './ResumeModal'

export default function ResumeButton({ className }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={className ? className : 'resume-btn'}
        onClick={() => setOpen(true)}
      >
        View Resume
      </button>

      {open && <ResumeModal onClose={() => setOpen(false)} />}
    </>
  )
}
