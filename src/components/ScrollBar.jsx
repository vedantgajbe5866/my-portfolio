import { useEffect, useState } from 'react'

function ScrollBar() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollPosition = window.scrollY

      setScroll((scrollPosition / totalHeight) * 100)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className='progress-bar'
      style={{ width: `${scroll}%` }}
    ></div>
  )
}

export default ScrollBar