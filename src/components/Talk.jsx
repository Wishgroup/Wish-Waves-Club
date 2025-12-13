import React from 'react'

function Talk() {
  const handleClick = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
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
    <div className="grax_tm_section">
      <div className="grax_tm_talk">
        <div className="container">
          <div className="talk_inner">
            <div className="text wow fadeInLeft" data-wow-duration="1.5s">
              <h3><span>I'm available for freelance work</span></h3>
            </div>
            <div className="button wow fadeInLeft anchor" data-wow-duration="1.5s" data-wow-delay=".2s">
              <a href="#contact" onClick={handleClick}>Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Talk

