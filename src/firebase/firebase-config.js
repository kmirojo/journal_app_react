import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAQjzkHAk7O0y4Qg7Tnm8JfnbzVDizyJE",
    authDomain: "react-journal-app-b9e7e.firebaseapp.com",
    projectId: "react-journal-app-b9e7e",
    storageBucket: "react-journal-app-b9e7e.appspot.com",
    messagingSenderId: "977895164924",
    appId: "1:977895164924:web:1bddec7d0ca7d6fa8e0079"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
