import React, { useRef, useEffect, useState } from 'react'
const videoProject = '/img/video-project.mp4'

function Hero({ showPreloader }) {
  const videoRef = useRef(null)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Start playing video after preloader finishes
    if (!showPreloader && videoRef.current) {
      // Set video properties
      videoRef.current.load()
      
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video is playing')
          })
          .catch(error => {
            console.log('Video autoplay prevented:', error)
            // Try to play on user interaction
            document.addEventListener('click', () => {
              if (videoRef.current) {
                videoRef.current.play()
              }
            }, { once: true })
          })
      }
      
      // Show button after 2 seconds delay
      setTimeout(() => {
        setShowButton(true)
      }, 2000)
    }
  }, [showPreloader])

  useEffect(() => {
    // Keep video playing when Hero section is in view
    const handleScroll = () => {
      if (videoRef.current) {
        const heroSection = document.querySelector('.simple-hero')
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect()
          const isInView = rect.top < window.innerHeight && rect.bottom > 0
          
          if (isInView && videoRef.current.paused) {
            videoRef.current.play().catch(error => {
              console.log('Video play prevented:', error)
            })
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Ensure video plays initially
    if (videoRef.current && !showPreloader) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error)
      })
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [showPreloader])

  const handleScrollToForm = (e) => {
    e.preventDefault()
    const membershipForm = document.querySelector('#membership-form')
    if (membershipForm) {
      // Get the topbar height for proper offset
      const topbar = document.querySelector('.grax_tm_topbar')
      const topbarHeight = topbar ? topbar.offsetHeight : 80
      const offset = topbarHeight + 20 // Add extra spacing
      
      const elementPosition = membershipForm.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      // Smooth scroll to membership form
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="grax_tm_hero simple-hero" id="home">
      <div className="bg">
        <video
          ref={videoRef}
          className="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(console.error)
            }
          }}
          onError={(e) => {
            console.error('Video error:', e)
            // Show fallback if video fails to load
            const fallback = document.querySelector('.video-fallback')
            if (fallback) {
              fallback.style.display = 'block'
            }
          }}
        >
          <source src={videoProject} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback background if video doesn't load */}
        <div className="video-fallback" style={{ background: '#041D26', display: 'none' }}></div>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <div className="container">
          <div className={`details ${showButton ? 'visible' : ''}`}>
            <button 
              className="scroll-to-form-button"
              onClick={handleScrollToForm}
              aria-label="Scroll to Membership Form"
            >
              Begin Your Journey
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

