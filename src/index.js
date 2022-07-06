import React, { StrictMode } from 'react';
import { initializeApp } from "firebase/app";
import { createRoot } from "react-dom/client";
import './css/index.css';

import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyByiVhk3QKJpVgDzRgiZydc8wifEocuAbc",
  authDomain: "the-gamer-nest.firebaseapp.com",
  projectId: "the-gamer-nest",
  storageBucket: "the-gamer-nest.appspot.com",
  messagingSenderId: "263192815556",
  appId: "1:263192815556:web:343f584178ee5f03e6e691"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
const root = createRoot (rootElement);

root.render (
  <StrictMode>
    <App />
  </StrictMode>
);
