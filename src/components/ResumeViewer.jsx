import { useState } from 'react'

export default function ResumeViewer({ src }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className="resume-viewer">
      {(loading || error) && (
        <div className="viewer-loader">
          {!error ? (
            <>
              <div className="spinner" />
              <span>Loading resume preview</span>
            </>
          ) : (
            <>
              <span>Unable to preview resume</span>
              <p style={{ marginTop: 8, fontSize: 13, color: '#fca5a5' }}>
                Open the resume directly if the preview is blocked.
              </p>
            </>
          )}
        </div>
      )}

      {!error && (
        <iframe
          title="Resume Preview"
          src={src}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false)
            setError(true)
          }}
          className="resume-iframe"
          loading="lazy"
          frameBorder="0"
        />
      )}

      {error && (
        <div className="viewer-fallback" style={{ padding: '24px', textAlign: 'center' }}>
          <button
            type="button"
            className="btn modal-download"
            onClick={() => window.open(src, '_blank')}
          >
            Open Resume
          </button>
        </div>
      )}
    </div>
  )
}
