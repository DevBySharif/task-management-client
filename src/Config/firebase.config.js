// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6GBq3YrtL2JWCcRuOpK3pCFevPYPVHfE",
  authDomain: "task-management-532ce.firebaseapp.com",
  projectId: "task-management-532ce",
  storageBucket: "task-management-532ce.appspot.com",
  messagingSenderId: "742722438357",
  appId: "1:742722438357:web:3f83a053ac70c965edce5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth