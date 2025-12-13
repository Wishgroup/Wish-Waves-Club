import React, { useState } from 'react'
import ModalboxNews from './ModalboxNews'

const placeholderImage = '/img/placeholders/4-3.jpg'
const news1 = '/img/news/1.jpg'
const news2 = '/img/news/2.jpg'
const news3 = '/img/news/3.jpg'
const facebookIcon = '/img/svg/social/facebook.svg'
const twitterIcon = '/img/svg/social/twitter.svg'
const behanceIcon = '/img/svg/social/behance.svg'
const dribbbleIcon = '/img/svg/social/dribbble.svg'

function News() {
  const [selectedNews, setSelectedNews] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNewsClick = (news) => {
    setSelectedNews(news)
    setIsModalOpen(true)
    document.body.classList.add('modal')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedNews(null)
    document.body.classList.remove('modal')
  }

  const newsItems = [
    {
      id: 1,
      image: news1,
      title: 'Developers watch out for these burnout symptoms',
      author: 'Alex Watson',
      date: '01 January 2022',
      description: `<p>As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</p>
      <blockquote>As Vintage decided to have a closer look into fast-paced New York web design realm in person. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</blockquote>
      <p>As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. We encounter professionals with careers to covet and lives to write books about. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</p>
      <div class="share">
        <span>Share:</span>
        <ul class="social">
          <li><a href="#"><img class="svg" src="${facebookIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${twitterIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${behanceIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${dribbbleIcon}" alt="" ></a></li>
        </ul>
      </div>`
    },
    {
      id: 2,
      image: news2,
      title: 'How to be appreciated for your hard work as a developer',
      author: 'Brook Kennedy',
      date: '22 December 2021',
      description: `<p>As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</p>
      <blockquote>As Vintage decided to have a closer look into fast-paced New York web design realm in person. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</blockquote>
      <p>As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. We encounter professionals with careers to covet and lives to write books about. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</p>
      <div class="share">
        <span>Share:</span>
        <ul class="social">
          <li><a href="#"><img class="svg" src="${facebookIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${twitterIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${behanceIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${dribbbleIcon}" alt="" ></a></li>
        </ul>
      </div>`
    },
    {
      id: 3,
      image: news3,
      title: 'How designers and developers can collaborate better',
      author: 'Paola Atkins',
      date: '05 December 2021',
      description: `<p>As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</p>
      <blockquote>As Vintage decided to have a closer look into fast-paced New York web design realm in person. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</blockquote>
      <p>As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. We encounter professionals with careers to covet and lives to write books about. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.</p>
      <div class="share">
        <span>Share:</span>
        <ul class="social">
          <li><a href="#"><img class="svg" src="${facebookIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${twitterIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${behanceIcon}" alt="" ></a></li>
          <li><a href="#"><img class="svg" src="${dribbbleIcon}" alt="" ></a></li>
        </ul>
      </div>`
    },
  ]

  return (
    <>
      <div className="grax_tm_section" id="news">
        <div className="grax_tm_news">
          <div className="container">
            <div className="grax_tm_title_holder">
              <h3>Latest <span>News</span></h3>
            </div>
            <div className="news_list">
              <ul>
                {newsItems.map((item, index) => (
                  <li key={item.id} className="wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay={`${index * 0.2}s`}>
                    <div className="list_inner">
                      <div className="image">
                        <img src={placeholderImage} alt="" />
                        <div className="main" style={{ backgroundImage: `url(${item.image})` }}></div>
                        <a 
                          className="grax_tm_full_link" 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault()
                            handleNewsClick(item)
                          }}
                        ></a>
                      </div>
                      <div className="details">
                        <h3 className="title">
                          <a 
                            href="#" 
                            onClick={(e) => {
                              e.preventDefault()
                              handleNewsClick(item)
                            }}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="date">By <a href="#">{item.author}</a> <span>{item.date}</span></p>
                      </div>
                      <div className="description" style={{ display: 'none' }}>
                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {selectedNews && (
        <ModalboxNews 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content={
            <div>
              <div className="main" style={{ backgroundImage: `url(${selectedNews.image})` }}></div>
              <h3 className="title">{selectedNews.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: selectedNews.description }} />
            </div>
          }
        />
      )}
    </>
  )
}

export default News

