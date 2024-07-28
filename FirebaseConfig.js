// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSU32HxsgT0Ks9zT1mPnEUQ0kPNOFPS5w",
  authDomain: "marcelino-bf5e0.firebaseapp.com",
  projectId: "marcelino-bf5e0",
  storageBucket: "marcelino-bf5e0.appspot.com",
  messagingSenderId: "124409772532",
  appId: "1:124409772532:web:c79a545e22de14f5b061a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
const db =getFirestore(app)
const database = getDatabase(app)


export {Auth, db,database};