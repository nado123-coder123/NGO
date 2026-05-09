import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHMFuubEUUGYFk0aBiF9KkxaJj6H9dhwQ",
  authDomain: "shajar-e22e5.firebaseapp.com",
  projectId: "shajar-e22e5",
  storageBucket: "shajar-e22e5.firebasestorage.app",
  messagingSenderId: "1024700064604",
  appId: "1:1024700064604:web:2afeb80e85b1078f1e1799"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
