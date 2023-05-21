// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfuaY6QMZSrdPGZ-sn6UmojwiR8GDnjs4",
  authDomain: "checkgpt-d63d5.firebaseapp.com",
  projectId: "checkgpt-d63d5",
  storageBucket: "checkgpt-d63d5.appspot.com",
  messagingSenderId: "545943210974",
  appId: "1:545943210974:web:1b02cf42e0599ce6b12b4f",
  measurementId: "G-X81ZCDGXPB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
//
