// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint for handling form submission
app.post('/send', (req, res) => {
  // Here you can handle the form submission logic
  // For demonstration, we'll just log the received data
  console.log('Received form data:', req.body);
  
  // Assuming the form submission is successful, send a response
  res.json({ status: 'success' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
