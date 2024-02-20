// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnPA0wJ18jdleLYsvck4_r3a9BVSyaXjo",
  authDomain: "contact-me-d671e.firebaseapp.com",
  projectId: "contact-me-d671e",
  storageBucket: "contact-me-d671e.appspot.com",
  messagingSenderId: "763690874771",
  appId: "1:763690874771:web:d44fbea7de444f26995a66"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;