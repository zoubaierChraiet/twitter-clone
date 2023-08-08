// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-clone-a5d05.firebaseapp.com",
  projectId: "twitter-clone-a5d05",
  storageBucket: "twitter-clone-a5d05.appspot.com",
  messagingSenderId: "924806444622",
  appId: "1:924806444622:web:5c64900d849f133adab51f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
