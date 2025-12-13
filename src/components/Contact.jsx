import React, { useState } from 'react'
const locationIcon = '/img/svg/location.svg'
const emailIcon = '/img/svg/email.svg'
const phoneIcon = '/img/svg/phone.svg'
const dribbbleIcon = '/img/svg/social/dribbble.svg'
const twitterIcon = '/img/svg/social/twitter.svg'
const facebookIcon = '/img/svg/social/facebook.svg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [message, setMessage] = useState('')
  const [showEmptyNotice, setShowEmptyNotice] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setShowEmptyNotice(true)
      setTimeout(() => setShowEmptyNotice(false), 2000)
      return
    }

    // Since we don't have a backend, we'll just show a success message
    // In a real app, you would send this to your backend API
    setMessage('Your message has been received, We will contact you soon.')
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setMessage(''), 4000)
  }

  return (
    <div className="grax_tm_contact" id="contact">
      <div className="container">
        <div className="grax_tm_title_holder">
          <h3>Get in <span>Touch</span></h3>
        </div>
        <div className="contact_inner">
          <div className="left wow fadeInLeft" data-wow-duration="1s">
            <div className="text">
              <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
            </div>
            <div className="info_list">
              <ul>
                <li>
                  <div className="list_inner">
                    <img className="svg" src={locationIcon} alt="" />
                    <p><span className="first">Address:</span><span className="second">Brook 103, New York, USA</span></p>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg" src={emailIcon} alt="" />
                    <p><span className="first">Email:</span><span className="second"><a href="mailto:example@gmail.com">example@gmail.com</a></span></p>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg" src={phoneIcon} alt="" />
                    <p><span className="first">Phone:</span><span className="second"><a href="tel:+770334425557">+77 033 442 55 57</a></span></p>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg" src={dribbbleIcon} alt="" />
                    <p><span className="first">Website:</span><span className="second"><a href="#">www.myaddress.com</a></span></p>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg" src={twitterIcon} alt="" />
                    <p><span className="first">Twitter:</span><span className="second"><a href="#">@twitternickname</a></span></p>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg" src={facebookIcon} alt="" />
                    <p><span className="first">Facebook:</span><span className="second"><a href="#">@facebooknickname</a></span></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="right wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".2s">
            <div className="fields">
              <form className="contact_form" id="contact_form" onSubmit={handleSubmit}>
                <div className="returnmessage">
                  {message && <span className="contact_success">{message}</span>}
                </div>
                {showEmptyNotice && (
                  <div className="empty_notice" style={{ display: 'block' }}>
                    <span>Please Fill Required Fields</span>
                  </div>
                )}
                <div className="first">
                  <ul>
                    <li>
                      <input 
                        id="name" 
                        type="text" 
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </li>
                    <li>
                      <input 
                        id="email" 
                        type="email" 
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </li>
                  </ul>
                </div>
                <div className="last">
                  <textarea 
                    id="message" 
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="grax_tm_button">
                  <a href="#" onClick={handleSubmit}>Send Message</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

