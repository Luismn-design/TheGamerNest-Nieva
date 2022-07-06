import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyByiVhk3QKJpVgDzRgiZydc8wifEocuAbc",
    authDomain: "the-gamer-nest.firebaseapp.com",
    projectId: "the-gamer-nest",
    storageBucket: "the-gamer-nest.appspot.com",
    messagingSenderId: "263192815556",
    appId: "1:263192815556:web:343f584178ee5f03e6e691"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore();
  