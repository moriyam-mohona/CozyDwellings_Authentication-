// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-r00dMHInq0dgpw8DE-1uguO_KF_feKQ",
    authDomain: "real-estate-ae83a.firebaseapp.com",
    projectId: "real-estate-ae83a",
    storageBucket: "real-estate-ae83a.appspot.com",
    messagingSenderId: "382950670541",
    appId: "1:382950670541:web:729a80c123483cfd13a984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;