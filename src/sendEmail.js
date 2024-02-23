const functions = require('firebase-functions');
const { https } = require('firebase-functions');
const { createTransport } = require('nodemailer');
const cors = require('cors');
const url = require('url'); // Ensure you have this for parsing URL query parameters

const corsHandler = cors({ origin: true });

// Assuming config() is defined somewhere else in your code to return your configuration
const {
  gmail: { password, recipient, sender },
} = config();

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: password,
  },
});

const mailOptions = (query) => ({
    from: sender,
    to: recipient,
    subject: query.subject || 'Firebase Message', // Using query.subject if available, otherwise fallback to default subject
    text: query.text || 'Working', // Using query.text if available, otherwise fallback to default text
    html: query.html || '<h1>Working</h1>', // Using query.html if available, otherwise fallback to default HTML
  });
  

const handleEmail = (req, res) => {
  corsHandler(req, res, () => {
    const query = url.parse(req.url, true).query;
    const Options = mailOptions(query); // Use the mailOptions function here
    transporter.sendMail(Options, (error, messageId) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        console.log(messageId);
        res.status(200).send({ status:  200 });
      }
    });
  });
};

exports.handleEmail = functions.https.onRequest(handleEmail);
