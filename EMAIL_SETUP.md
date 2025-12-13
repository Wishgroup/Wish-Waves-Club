# Email Setup Instructions

This website includes a contact form that sends emails to `info@wishgroup.ae`. You have two options for setting up email functionality:

## Option 1: EmailJS (Recommended - No Backend Required)

EmailJS is a service that allows you to send emails directly from the frontend without a backend server.

### Setup Steps:

1. **Create an EmailJS account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Add an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:
     ```
     To: info@wishgroup.ae
     From: {{from_name}} <{{from_email}}>
     Subject: Contact Form Submission from {{from_name}}
     
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Company: {{company}}
     
     Message:
     {{message}}
     ```
   - Save the template and note the Template ID

4. **Get your Public Key**
   - Go to "Account" > "General"
   - Copy your Public Key

5. **Update the ContactForm Component**
   - Open `src/components/ContactForm.jsx`
   - Find the EmailJS initialization and send code (around lines 25-35)
   - Uncomment the EmailJS code
   - Replace:
     - `YOUR_PUBLIC_KEY` with your EmailJS Public Key
     - `YOUR_SERVICE_ID` with your Service ID
     - `YOUR_TEMPLATE_ID` with your Template ID
   - Comment out or remove the backend API fetch code

## Option 2: Backend Server (Express.js)

If you prefer to use a backend server, you can use the provided Express server.

### Setup Steps:

1. **Install dependencies**
   ```bash
   npm install express cors nodemailer dotenv
   ```

2. **Configure email settings**
   - Create a `.env` file in the root directory
   - Add your email credentials:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     PORT=3001
     ```
   - For Gmail, you'll need to create an App Password:
     - Go to Google Account settings
     - Enable 2-Step Verification
     - Generate an App Password

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Update the ContactForm Component**
   - The component is already configured to use `http://localhost:3001/api/send-email`
   - For production, update the URL to your server's address

## Testing

1. Fill out the contact form on the website
2. Submit the form
3. Check the `info@wishgroup.ae` inbox for the email

## Troubleshooting

- **EmailJS**: Make sure your service and template IDs are correct
- **Backend**: Check that the server is running and `.env` file is configured
- **Fallback**: If both methods fail, the form will open the user's email client with a pre-filled message

## Production Deployment

For production:
- Use EmailJS (easier, no server needed)
- Or deploy your Express server to a hosting service (Heroku, Railway, etc.)
- Update the API URL in ContactForm.jsx to your production server URL

