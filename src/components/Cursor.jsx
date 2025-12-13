import React, { useEffect } from 'react'

function Cursor() {
  useEffect(() => {
    const cursorInner = document.querySelector('.cursor-inner')
    const cursorOuter = document.querySelector('.cursor-outer')
    
    if (!cursorInner || !cursorOuter) return

    let mouseX = 0
    let mouseY = 0
    let isMoving = false

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      if (!isMoving) {
        cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
      cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('.cursor-pointer')) {
        cursorInner.classList.add('cursor-hover')
        cursorOuter.classList.add('cursor-hover')
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('.cursor-pointer')) {
        if (!e.target.closest('.cursor-pointer')) {
          cursorInner.classList.remove('cursor-hover')
          cursorOuter.classList.remove('cursor-hover')
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseenter', handleMouseEnter, true)
    document.body.addEventListener('mouseleave', handleMouseLeave, true)

    cursorInner.style.visibility = 'visible'
    cursorOuter.style.visibility = 'visible'

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseenter', handleMouseEnter, true)
      document.body.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  )
}

export default Cursor

