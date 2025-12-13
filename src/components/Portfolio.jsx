import React, { useState } from 'react'
import './Portfolio.css'
const placeholderImage = '/img/placeholders/1-1.jpg'
const portfolio1 = '/img/portfolio/1.jpg'
const portfolio2 = '/img/portfolio/2.jpg'
const portfolio3 = '/img/portfolio/3.jpg'
const portfolio4 = '/img/portfolio/4.jpg'
const portfolio5 = '/img/portfolio/5.jpg'
const portfolio7 = '/img/portfolio/7.jpg'

function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxVideo, setLightboxVideo] = useState(null)

  const portfolioItems = [
    { id: 1, image: portfolio1, category: 'Video', title: 'Sweet Fruit', type: 'video', url: 'https://www.youtube.com/watch?v=ICr_bOuM9Zo' },
    { id: 2, image: portfolio2, category: 'Branding', title: 'Good Present', type: 'image', url: portfolio2 },
    { id: 3, image: portfolio3, category: 'Design', title: 'Ice Cream', type: 'image', url: portfolio3 },
    { id: 4, image: portfolio4, category: 'Video', title: 'Black Coffee', type: 'video', url: 'https://www.youtube.com/watch?v=ICr_bOuM9Zo' },
    { id: 5, image: portfolio5, category: 'Branding', title: 'Blue Lemon', type: 'image', url: portfolio5 },
    { id: 6, image: portfolio7, category: 'Design', title: 'Delicious Cherry', type: 'image', url: portfolio7 },
  ]

  const handleClick = (item) => {
    if (item.type === 'video') {
      setLightboxVideo(item.url)
    } else {
      setLightboxImage(item.url)
    }
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxVideo(null)
  }

  return (
    <>
      <div className="grax_tm_section" id="portfolio">
        <div className="grax_tm_portfolio">
          <div className="container">
            <div className="grax_tm_title_holder">
              <h3>Selected <span>Works</span></h3>
            </div>
            <div className="portfolio_list">
              <ul className="gallery_zoom my_waypoint">
                {portfolioItems.map((item, index) => (
                  <li key={item.id} className="wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay={`${index * 0.2}s`}>
                    <div className="list_inner">
                      <div className="image">
                        <img src={placeholderImage} alt="" />
                        <div className="main" style={{ backgroundImage: `url(${item.image})` }}></div>
                      </div>
                      <div className="overlay"></div>
                      <div className="details">
                        <span>{item.category}</span>
                        <h3>{item.title}</h3>
                      </div>
                      <a 
                        className="grax_tm_full_link" 
                        href={item.url}
                        onClick={(e) => {
                          e.preventDefault()
                          handleClick(item)
                        }}
                      ></a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={lightboxImage} alt="" />
          </div>
        </div>
      )}

      {lightboxVideo && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content video" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <iframe 
              src={lightboxVideo.replace('watch?v=', 'embed/')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio

