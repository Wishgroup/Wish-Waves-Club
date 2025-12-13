import React, { useState } from 'react'
const logoDark = '/img/logo/dark.png'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)
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
    <div className="grax_tm_mobile_menu">
      <div className="topbar_inner">
        <div className="container bigger">
          <div className="topbar_in">
            <div className="logo">
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(e, '#home'); }}>
                <img src={logoDark} alt="" />
              </a>
            </div>
            <div className="my_trigger">
              <div 
                className={`hamburger hamburger--collapse-r ${isOpen ? 'is-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="container">
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
              <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a></li>
              <li><a href="#news" onClick={(e) => handleNavClick(e, '#news')}>News</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

