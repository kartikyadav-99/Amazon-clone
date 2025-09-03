// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCGTUZeLh858v4sRlAhZn3JTvnJMMnndBc",
  authDomain: "clone-app-bdbcb.firebaseapp.com",
  projectId: "clone-app-bdbcb",
  storageBucket: "clone-app-bdbcb.firebasestorage.app",
  messagingSenderId: "1067999186178",
  appId: "1:1067999186178:web:28787f02bf07d83951c61b",
  measurementId: "G-79WYLLX1V4"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
