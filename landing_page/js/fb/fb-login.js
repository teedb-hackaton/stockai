import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  FacebookAuthProvider, signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnLMvGkYAOcftNX_IBlAcWmYh8gBeafl0",
  authDomain: "login-example-db39d.firebaseapp.com",
  projectId: "login-example-db39d",
  storageBucket: "login-example-db39d.appspot.com",
  messagingSenderId: "27329213894",
  appId: "1:27329213894:web:b715e8c6541446a678aec7",
  measurementId: "G-DZW9KQYVH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new FacebookAuthProvider();

document.addEventListener("DOMContentLoaded", function () {
  const facebookLogin = document.getElementById("facebookBtn");
  facebookLogin.addEventListener("click", function (event) {
    event.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...

        console.log(user);
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  });
});
