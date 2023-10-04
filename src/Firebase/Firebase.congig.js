// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZbK8MJ_O0rowwe1dlfWQkX5oXHPgoTOA",
  authDomain: "ema-john-simple-auth-ac821.firebaseapp.com",
  projectId: "ema-john-simple-auth-ac821",
  storageBucket: "ema-john-simple-auth-ac821.appspot.com",
  messagingSenderId: "147981289793",
  appId: "1:147981289793:web:9a4b4d5e7c24afa0d579c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;