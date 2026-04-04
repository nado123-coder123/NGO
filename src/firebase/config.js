import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace these placeholder values with your real Firebase config
// Get them from: Firebase Console > Project Settings > General > Your Apps
const firebaseConfig = {
  apiKey: "<your_api_key>",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abc123"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
