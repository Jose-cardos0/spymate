// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOzWZivw3wCAqaqjZVbhWiK1bpEZBMOMs",
  authDomain: "spymateapp.firebaseapp.com",
  projectId: "spymateapp",
  storageBucket: "spymateapp.firebasestorage.app",
  messagingSenderId: "372744903352",
  appId: "1:372744903352:web:d35dee940f04878049724d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
