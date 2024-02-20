import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref } from 'firebase/database';
import React, { useState } from 'react';
import "./contactPage.css";


const firebaseConfig = {
    apiKey: "AIzaSyAnPA0wJ18jdleLYsvck4_r3a9BVSyaXjo",
    authDomain: "contact-me-d671e.firebaseapp.com",
    databaseURL: "https://contact-me-d671e-default-rtdb.firebaseio.com",
    projectId: "contact-me-d671e",
    storageBucket: "contact-me-d671e.appspot.com",
    messagingSenderId: "763690874771",
    appId: "1:763690874771:web:d44fbea7de444f26995a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

// Define ContactPage component
const ContactPage = () => {
    // State to hold form data
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    // Handler function for input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData); // Log the form data
        // Send the form data to Firebase Realtime Database
        push(ref(database, 'messages'), userData)
            .then(() => {
                console.log("Message sent to Firebase:", userData);
                // Clear the form fields by resetting the state
                setUserData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error("Error sending message to Firebase:", error);
            });
       // Send the form data to the server
    axios.post('http://localhost:3001/api/send-email', {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        message: userData.message
    })

    .then((response) => {
        if (response.status === 200) {
            console.log("Email sent successfully");
            // Clear the form fields by resetting the state
            setUserData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        } else {
            console.error("Error sending email:", response.data);
        }
    })
    .catch((error) => {
        if (error.response.status === 404) {
            console.log('The requested resource was not found.');
        } else {
            console.log('An error occurred:', error.message);
        }
    });
}
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

// Export ContactPage component
export default ContactPage;
