import React, { useEffect, useState } from 'react'
const logoDark = '/img/logo-dark.png' // Black logo for light backgrounds
const logoLight = '/img/logo-light.png' // White logo for dark backgrounds

function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100)
      
      // Check if topbar is over dark sections (Hero video, Footer)
      const heroSection = document.querySelector('.simple-hero')
      const footerSection = document.querySelector('.mil-dark-bg')
      const appPromoSection = document.querySelector('section[style*="background-color"]')
      
      const topbar = document.querySelector('.grax_tm_topbar')
      if (!topbar) return
      
      const topbarRect = topbar.getBoundingClientRect()
      const topbarBottom = topbarRect.bottom
      
      // Check if we're over Hero (video background - dark) or Footer (dark background)
      let overDarkSection = false
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        if (topbarBottom >= heroRect.top && topbarBottom <= heroRect.bottom) {
          overDarkSection = true
        }
      }
      
      if (footerSection && !overDarkSection) {
        const footerRect = footerSection.getBoundingClientRect()
        if (topbarBottom >= footerRect.top && topbarBottom <= footerRect.bottom) {
          overDarkSection = true
        }
      }
      
      if (appPromoSection && !overDarkSection) {
        const promoRect = appPromoSection.getBoundingClientRect()
        if (topbarBottom >= promoRect.top && topbarBottom <= promoRect.bottom) {
          overDarkSection = true
        }
      }
      
      setIsOverDark(overDarkSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const offset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={`grax_tm_topbar ${isScrolled ? 'animate' : ''} ${isOverDark ? 'over-dark' : ''}`}>
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(e, '#home'); }}>
              <img className="logo-dark" src={logoDark} alt="Wish Waves Logo" />
              <img className="logo-light" src={logoLight} alt="Wish Waves Logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
              </li>
              <li>
                <a href="#membership-form" onClick={(e) => handleNavClick(e, '#membership-form')}>Membership</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar

