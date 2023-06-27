// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_G88_foV1JUVM1aTG1Q-n0QncXfTveCQ",
  authDomain: "realtor-clone-app-66c5c.firebaseapp.com",
  projectId: "realtor-clone-app-66c5c",
  storageBucket: "realtor-clone-app-66c5c.appspot.com",
  messagingSenderId: "1004984881429",
  appId: "1:1004984881429:web:485152f11c495c7248991c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()