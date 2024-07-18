// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2OPSMtqZhRf7XqBU63wmDpFZV9RCLikQ",
  authDomain: "invoicer-359f2.firebaseapp.com",
  projectId: "invoicer-359f2",
  storageBucket: "invoicer-359f2.appspot.com",
  messagingSenderId: "326255035325",
  appId: "1:326255035325:web:ed3f3a8111bc943dc448d4",
  measurementId: "G-J7GSEY0300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };