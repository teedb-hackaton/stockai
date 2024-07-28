// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCnLMvGkYAOcftNX_IBlAcWmYh8gBeafl0",
    authDomain: "login-example-db39d.firebaseapp.com",
    projectId: "login-example-db39d",
    storageBucket: "login-example-db39d.appspot.com",
    messagingSenderId: "27329213894",
    appId: "1:27329213894:web:b715e8c6541446a678aec7",
    measurementId: "G-DZW9KQYVH2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

export { auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword };
