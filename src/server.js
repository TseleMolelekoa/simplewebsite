// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios'); // Import Axios module


// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup (using Mailtrap for testing)
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '2d995e1260ce3a',
        pass: 'eac7db74039b8a'
    }
});

// API endpoint to handle form submissions
// API endpoint to handle form submissions
app.post('/send-email', (req, res) => {
  // Extract form data from request body
  const { name, email, phone, message } = req.body;

  // Email content
  const mailOptions = {
      from: 'your-email@example.com',
      to: 'recipient@example.com',
      subject: 'New Contact Form Submission',
      text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
      `
  };

  // Send email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          // If sending email fails, log error and send 500 response
          console.error('Error sending email:', error);
          res.status(500).send('Error sending email');
      } else {
          // If email sent successfully, log response and send 200 response
          console.log('Email sent:', info.response);
          res.status(200).send('Email sent successfully');
      }
  });
   // Example of making an Axios POST request to another endpoint after sending email
   axios.post('http://localhost:3000/log-email', { name, email, phone, message })
   .then(response => {
       console.log('Log email response:', response.data);
   })
   .catch(error => {
       console.error('Error logging email:', error);
   });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});