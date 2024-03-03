import React from "react";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyAzY5EG5wXkYtU5Dw2wnWKpKSd68Ne5mL8",
  authDomain: "blogs-790f3.firebaseapp.com",
  projectId: "blogs-790f3",
  storageBucket: "blogs-790f3.appspot.com",
  messagingSenderId: "981504677024",
  appId: "1:981504677024:web:8ee2172121d990b14225c5",
  // measurementId: <measurementId>,
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
