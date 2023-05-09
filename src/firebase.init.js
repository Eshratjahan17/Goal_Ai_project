// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWnbasfQbNvTl5dR1WmulcxCCt2z3tNQo",
  authDomain: "ai-project-165fc.firebaseapp.com",
  projectId: "ai-project-165fc",
  storageBucket: "ai-project-165fc.appspot.com",
  messagingSenderId: "828813336051",
  appId: "1:828813336051:web:acfd2ad296824d951d4686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
