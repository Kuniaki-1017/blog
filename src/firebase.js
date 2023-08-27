// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArqIwwHTEQv3eZ9AS88sg9cP0bw7Qxhkk",
  authDomain: "blog-cce8b.firebaseapp.com",
  projectId: "blog-cce8b",
  storageBucket: "blog-cce8b.appspot.com",
  messagingSenderId: "965836697739",
  appId: "1:965836697739:web:8c1de24f66940cac8be48e",
  measurementId: "G-T7BCX3P7VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export{analytics, auth, provider,db};
