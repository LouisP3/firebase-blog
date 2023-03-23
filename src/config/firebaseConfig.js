// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
//this allows connection to DB
import {getAuth} from 'firebase/auth'

import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmuPukMfF2oYof5QUh8dQxzi2GWS7-lBQ",
  authDomain: "fir-blog-4d6ff.firebaseapp.com",
  projectId: "fir-blog-4d6ff",
  storageBucket: "fir-blog-4d6ff.appspot.com",
  messagingSenderId: "251393882002",
  appId: "1:251393882002:web:e9a72cf330c1fe33eb734b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//set up DB
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app)