import { useEffect } from 'react'

export function useSvgConverter() {
  useEffect(() => {
    const convertSvgImages = () => {
      const svgImages = document.querySelectorAll('img.svg')
      
      svgImages.forEach((img) => {
        const imgClass = img.className
        const imgURL = img.src
        
        fetch(imgURL)
          .then(response => response.text())
          .then(data => {
            const parser = new DOMParser()
            const svgDoc = parser.parseFromString(data, 'image/svg+xml')
            const svgElement = svgDoc.querySelector('svg')
            
            if (svgElement) {
              if (imgClass) {
                svgElement.setAttribute('class', `${imgClass} replaced-svg`)
              }
              svgElement.removeAttribute('xmlns:a')
              img.replaceWith(svgElement)
            }
          })
          .catch(err => {
            console.warn('Failed to convert SVG:', imgURL, err)
          })
      })
    }

    // Convert SVGs after a short delay to ensure DOM is ready
    setTimeout(convertSvgImages, 100)
  }, [])
}

