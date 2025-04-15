// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtav8x_zJFoSg6wkMr1ORv9ZCatNAJroc",
  authDomain: "casse-les-couilles.firebaseapp.com",
  projectId: "casse-les-couilles",
  storageBucket: "casse-les-couilles.firebasestorage.app",
  messagingSenderId: "1049378728965",
  appId: "1:1049378728965:web:428dfd9bfa6b1a2400c06c",
  measurementId: "G-1SZ3XQL53J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
