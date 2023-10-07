// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyLysNpCwBVRiD1vG4Uj8Yt0xYjfIcxiE",
  authDomain: "social-event-management-d389a.firebaseapp.com",
  projectId: "social-event-management-d389a",
  storageBucket: "social-event-management-d389a.appspot.com",
  messagingSenderId: "615334124768",
  appId: "1:615334124768:web:6ae71c3001361419d10485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;