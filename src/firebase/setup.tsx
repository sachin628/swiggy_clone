import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC1ievTzc7JD9IuJWIhpA0ItNds5LsrKeQ",
  authDomain: "swiggy-clone-3cd1c.firebaseapp.com",
  projectId: "swiggy-clone-3cd1c",
  storageBucket: "swiggy-clone-3cd1c.firebasestorage.app",
  messagingSenderId: "381758428382",
  appId: "1:381758428382:web:5e2afe68e4f01b66d21e4f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)