// Simple Express server for handling email sending
// Run with: node server.js
// Make sure to install: npm install express cors nodemailer dotenv

import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Create transporter (configure with your email service)
// For Gmail, you'll need an app password
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use SMTP settings
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
})

app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, text, html } = req.body

    if (!to || !subject || !text) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: to || 'info@wishgroup.ae',
      subject: subject,
      text: text,
      html: html || text.replace(/\n/g, '<br>')
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log('Make sure to set EMAIL_USER and EMAIL_PASS in .env file')
})

