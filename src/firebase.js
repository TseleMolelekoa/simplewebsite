
// // Import necessary modules
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set, get } from "firebase/database";
// import axios from 'axios';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import express from 'express';

// // Firebase configuration object
// const firebaseConfig = {
//   apiKey: "AIzaSyAnPA0wJ18jdleLYsvck4_r3a9BVSyaXjo",
//   authDomain: "contact-me-d671e.firebaseapp.com",
//   databaseURL: "https://contact-me-d671e-default-rtdb.firebaseio.com",
//   projectId: "contact-me-d671e",
//   storageBucket: "contact-me-d671e.appspot.com",
//   messagingSenderId: "763690874771",
//   appId: "1:763690874771:web:d44fbea7de444f26995a66"
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Get a reference to the Realtime Database service
// const db = getDatabase(app);

// // Initialize Express
// const appExpress = express();

// // Enable CORS
// appExpress.use(cors());

// // Express middleware to parse JSON bodies
// appExpress.use(express.json());

// // POST route to handle form submissions
// appExpress.post('/submit', async (req, res) => {
//   try {
//     // Save form data to the database
//     const dbRef = ref(db, 'contacts');
//     await set(dbRef, req.body);

//     // Send email notification
//     const transporter = nodemailer.createTransport({
//       // Transporter configuration for sending emails
//     });

//     await transporter.sendMail({
//       // Email configuration
//     });

//     res.status(200).send("Form submitted successfully");
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     res.status(500).send("Internal server error");
//   }
// });

// // Start server
// const PORT = process.env.PORT || 3000;
// appExpress.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const admin = require('firebase-admin');
const sendEmail = require('./sendEmail'); // doesn't exist yet

admin.initializeApp();

exports.sendEmail = sendEmail;
