import React, { useEffect, useState } from 'react'

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      
      setScrollProgress(progress)
      setIsVisible(scrollTop >= 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`progressbar ${isVisible ? 'animate' : ''}`}>
      <a href="#" onClick={handleClick}>
        <span className="text">To Top</span>
      </a>
      <span className="line" style={{ height: `${scrollProgress}%` }}></span>
    </div>
  )
}

export default ProgressBar

