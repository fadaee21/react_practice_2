// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcj7t25cqw4IYGKxnhw2J7oCFG0lq5Y0s",
    authDomain: "decoded-battery-355809.firebaseapp.com",
    projectId: "decoded-battery-355809",
    storageBucket: "decoded-battery-355809.appspot.com",
    messagingSenderId: "26386422573",
    appId: "1:26386422573:web:95440196e750726aa0d1a4",
    measurementId: "G-BS7KQ1GQ2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// const analytics = getAnalytics(app);