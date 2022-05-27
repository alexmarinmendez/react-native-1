// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvIk8dUTZdUmhsrNOwWIfO3BrwIRiQcUo",
  authDomain: "react-native-1-c5c48.firebaseapp.com",
  projectId: "react-native-1-c5c48",
  storageBucket: "react-native-1-c5c48.appspot.com",
  messagingSenderId: "691210768011",
  appId: "1:691210768011:web:b6f416e87db25d50e14e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;