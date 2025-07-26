// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Not sure if this is necessary or not
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEExbQIfXTn6Y72NzEVcFyESjecjybQQg",
  authDomain: "inventory-practice-app.firebaseapp.com",
  projectId: "inventory-practice-app",
  storageBucket: "inventory-practice-app.firebasestorage.app",
  messagingSenderId: "339955110861",
  appId: "1:339955110861:web:fe5844c502aa270fdfea84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);