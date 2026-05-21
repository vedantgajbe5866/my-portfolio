import { useState, useEffect } from 'react'

export default function ResumeViewer({ src }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pdfUrl, setPdfUrl] = useState(null)

  useEffect(() => {
    let active = true
    let objectUrl = null

    setLoading(true)
    setError(false)

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load PDF (${response.status})`)
        }
        return response.blob()
      })
      .then((blob) => {
        if (!active) return
        objectUrl = URL.createObjectURL(blob)
        setPdfUrl(objectUrl)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        if (!active) return
        setError(true)
        setLoading(false)
      })

    return () => {
      active = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [src])

  return (
    <div className="resume-viewer">
      {(loading || error) && (
        <div className="viewer-loader">
          {!error ? (
            <>
              <div className="spinner" />
              <span>Loading preview</span>
            </>
          ) : (
            <>
              <span>Unable to load resume preview</span>
              <p style={{ marginTop: 8, fontSize: 13, color: '#fca5a5' }}>
                Open full screen or download instead.
              </p>
            </>
          )}
        </div>
      )}

      {pdfUrl && !error && (
        <div className="viewer-embed">
          <iframe
            title="Resume preview"
            src={pdfUrl}
            onLoad={() => setLoading(false)}
            className="resume-iframe"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  )
}
