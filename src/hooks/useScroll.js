import { useEffect } from 'react'

export function useScroll() {
  useEffect(() => {
    // Simple animation on scroll using IntersectionObserver
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.wow')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated')
            }
          })
        },
        { threshold: 0.1 }
      )

      elements.forEach((el) => observer.observe(el))
    }

    // Initialize parallax effect
    const initParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax .layer')
      
      const handleMouseMove = (e) => {
        parallaxElements.forEach((layer) => {
          const depth = parseFloat(layer.getAttribute('data-depth')) || 0.1
          const x = (e.clientX - window.innerWidth / 2) * depth
          const y = (e.clientY - window.innerHeight / 2) * depth
          layer.style.transform = `translate(${x}px, ${y}px)`
        })
      }

      document.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }

    // Initialize WOW.js if available (fallback)
    if (window.WOW) {
      new window.WOW({
        animateClass: 'animated',
        offset: 10
      }).init()
    } else {
      animateOnScroll()
    }

    // Initialize parallax if available (fallback)
    if (window.Parallax && document.querySelector('.parallax')) {
      const scene = document.querySelector('.parallax')
      if (scene) {
        new window.Parallax(scene, {
          relativeInput: true
        })
      }
    } else {
      const cleanup = initParallax()
      return cleanup
    }
  }, [])
}

