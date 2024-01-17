import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKoj78n-jg7ILX1S1LAIZmXY_rI3UwWcY",
  authDomain: "konnet-c7f61.firebaseapp.com",
  projectId: "konnet-c7f61",
  storageBucket: "konnet-c7f61.appspot.com",
  messagingSenderId: "576899128821",
  appId: "1:576899128821:web:17e9e557d8fb51e32754bc",
  measurementId: "G-LS1F9VSTXZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
