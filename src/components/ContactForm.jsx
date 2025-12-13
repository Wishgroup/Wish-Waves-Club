import React, { useState, useEffect, useRef } from 'react'
// import emailjs from '@emailjs/browser' // Uncomment when using EmailJS
import './ContactForm.css'

function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const formRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Initialize EmailJS (replace with your public key)
    // emailjs.init('YOUR_PUBLIC_KEY')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      // Method 1: Using EmailJS (Recommended - No backend needed)
      // Uncomment and configure with your EmailJS credentials
      // Get your keys from https://www.emailjs.com/
      
      // emailjs.init('YOUR_PUBLIC_KEY')
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',      // e.g., 'service_xxxxx'
      //   'YOUR_TEMPLATE_ID',     // e.g., 'template_xxxxx'
      //   {
      //     to_email: 'info@wishgroup.ae',
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     phone: formData.phone || 'Not provided',
      //     company: formData.company || 'Not provided',
      //     message: formData.message,
      //   }
      // )

      // Method 2: Using backend API (if you have a server)
      // Uncomment this if you're using the Express server
      try {
        const response = await fetch('http://localhost:3001/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'info@wishgroup.ae',
            subject: `Contact Form Submission from ${formData.name}`,
            text: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Message: ${formData.message}
            `.trim(),
            html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
<p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
<p><strong>Message:</strong></p>
<p>${formData.message.replace(/\n/g, '<br>')}</p>
            `.trim()
          })
        })

        if (response.ok) {
          setMessage('Thank you! Your message has been sent successfully.')
          setFormData({ name: '', email: '', phone: '', company: '', message: '' })
          return
        } else {
          throw new Error('Failed to send email')
        }
      } catch (apiError) {
        // If API fails, fall through to mailto fallback
        throw apiError
      }
    } catch (error) {
      // Fallback: Use mailto link
      console.error('Error sending email:', error)
      const mailtoLink = `mailto:info@wishgroup.ae?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone || 'Not provided')}%0ACompany: ${encodeURIComponent(formData.company || 'Not provided')}%0AMessage: ${encodeURIComponent(formData.message)}`
      
      // Try to open mailto, but also show message
      try {
        window.location.href = mailtoLink
        setMessage('Opening your email client. If it doesn\'t open, please email us directly at info@wishgroup.ae')
      } catch (mailtoError) {
        setMessage('Please email us directly at info@wishgroup.ae with your inquiry.')
      }
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  return (
    <div 
      ref={sectionRef}
      className={`contact-form-section ${isVisible ? 'visible' : ''}`}
      id="contact-form"
    >
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h2>Get in Touch</h2>
            <p>Join us in our mission. We'd love to hear from you. Please fill out the form below.</p>
          </div>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            {message && (
              <div className={`form-message ${message.includes('error') || message.includes('Please email') ? 'error' : 'success'}`}>
                {message}
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
