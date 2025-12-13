import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const aboutImage = '/img/about/1.jpg'

function About() {
  const sectionRef = useScrollAnimation()
  
  return (
    <div ref={sectionRef} className="grax_tm_section simple-about" id="about">
      <div className="grax_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="about-content">
              <div className="grax_tm_title_holder">
                <h2>Story <span>Behind</span></h2>
              </div>
              <div className="text">
                <p>The Wish Fishing Club logo was created to represent a modern, ethical, and ocean-inspired brand that connects people to both marine adventure and sustainable investment. It symbolizes the club's vision "Fishing with a Purpose: Where Every Catch Creates Change."</p>
                <p>We are committed to creating meaningful connections between passionate anglers and sustainable marine practices, ensuring that every fishing experience contributes to positive change in our oceans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

