import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const logo = '/img/logo/logo.png'
const facebookIcon = '/img/svg/social/facebook.svg'
const twitterIcon = '/img/svg/social/twitter.svg'
const dribbbleIcon = '/img/svg/social/dribbble.svg'
const tikTokIcon = '/img/svg/social/tik-tok.svg'

function Copyright() {
  const sectionRef = useScrollAnimation()
  
  return (
    <div ref={sectionRef} className="grax_tm_section">
      <div className="grax_tm_copyright">
        <div className="my_wave">
          <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <path id="wave_img" data-color="#fff" d="M 0 185.609 C 317.16666666666663 118.136 317.16666666666663 118.136 634.3333333333333 151.87 C 951.4999999999999 185.609 951.4999999999999 185.609 1268.6666666666665 116.402 C 1585.833333333333 47.195 1585.833333333333 47.195 1903 131.925 L 1903 507 L 0 507 Z" fill="#fff"></path>
          </svg>
        </div>
        <div className="container">
          <div className="copyright_inner">
            <div className="logo wow fadeInLeft" data-wow-duration="1s">
              <img src={logo} alt="" />
            </div>
            <div className="social wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".2s">
              <ul>
                <li><a href="#"><img className="svg" src={facebookIcon} alt="" /></a></li>
                <li><a href="#"><img className="svg" src={twitterIcon} alt="" /></a></li>
                <li><a href="#"><img className="svg" src={dribbbleIcon} alt="" /></a></li>
                <li><a href="#"><img className="svg" src={tikTokIcon} alt="" /></a></li>
              </ul>
            </div>
            <div className="copy wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
              <p>&copy; Copyright 2022 by Marketify</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copyright

