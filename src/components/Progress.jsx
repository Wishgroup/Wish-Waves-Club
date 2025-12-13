import React, { useEffect, useRef, useState } from 'react'

function Progress() {
  const [isVisible, setIsVisible] = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.9 }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current)
      }
    }
  }, [])

  const progressItems = [
    { label: 'Web Development', value: 95 },
    { label: 'Brand Identity', value: 80 },
    { label: 'Logo Design', value: 90 },
  ]

  return (
    <div className="grax_tm_progress_part" ref={progressRef}>
      <div className="container">
        <div className="part_inner">
          <div className="left wow fadeInLeft" data-wow-duration="1.5s">
            <h3>I have high skills in developing and programming</h3>
            <p>I was doing everything in my power to provide me with all the experiences to provide cost-effective and high quality products to satisfy my customers all over the world</p>
          </div>
          <div className="right wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".2s">
            <div className="kioto_progress">
              {progressItems.map((item, index) => (
                <div key={index} className="progress_inner" data-value={item.value}>
                  <span>
                    <span className="label">{item.label}</span>
                    <span className="number">{item.value}%</span>
                  </span>
                  <div className="background">
                    <div className={`bar ${isVisible ? 'open' : ''}`}>
                      <div 
                        className="bar_in" 
                        style={{ 
                          width: isVisible ? `${item.value}%` : '0%',
                          transition: 'width 1s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress

