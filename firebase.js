// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA0q5s9xovJ9dTMViJJBhBmE_4igB_1m4k",
    authDomain: "auth-41169.firebaseapp.com",
    projectId: "auth-41169",
    storageBucket: "auth-41169.appspot.com",
    messagingSenderId: "638966409343",
    appId: "1:638966409343:web:892f96cc021471ac12f74a"
  };


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };