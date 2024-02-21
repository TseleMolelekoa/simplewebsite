import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import "./contactPage.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnPA0wJ18jdleLYsvck4_r3a9BVSyaXjo",
  authDomain: "contact-me-d671e.firebaseapp.com",
  databaseURL: "https://contact-me-d671e-default-rtdb.firebaseio.com",
  projectId: "contact-me-d671e",
  storageBucket: "contact-me-d671e.appspot.com",
  messagingSenderId: "763690874771",
  appId: "1:763690874771:web:d44fbea7de444f26995a66"
};

// Initialize Firebase app
const contactPage  = initializeApp(firebaseConfig);

// Define the ContactForm component
const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save form data to Firebase Real-time Database
      const database = getDatabase();
      const contactsRef = ref(database, 'contacts');
      push(contactsRef, {
        ...userData,
        timestamp: Date.now()
      });

      // Clear form fields
      setUserData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving data to Firebase:', error);
    }
  };

  // Render the component
  return (
    <div className='container'>
      <h3 className='heading'>Get In Touch</h3>
      <div className="Contact">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} placeholder="Enter Your Full Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Enter Your E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={userData.phone} onChange={handleInputChange} placeholder="Enter Your Phone Number" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={userData.message} onChange={handleInputChange} placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <footer className="footer">
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a></li>
          <li><a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></a></li>
        </ul>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Tsele Molelekoa. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Export ContactForm component
export default ContactForm;