// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr8QvhCSpLhCsiRJd6Q4xpVGQOxL7HJzk",
  authDomain: "flashcardsaas-55140.firebaseapp.com",
  projectId: "flashcardsaas-55140",
  storageBucket: "flashcardsaas-55140.appspot.com",
  messagingSenderId: "734531803372",
  appId: "1:734531803372:web:feef5a2d8110b94c272dc9",
  measurementId: "G-WTJRQWWQ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Analytics (only on the client-side)
let analytics;

if (typeof window !== 'undefined') {
    import('firebase/analytics').then(({ getAnalytics }) => {
        analytics = getAnalytics(app);
    });
}

export { db, analytics };
