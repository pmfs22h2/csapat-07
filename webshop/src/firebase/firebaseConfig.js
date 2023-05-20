// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK6MFiuvqKalx4iCbIqTwIZeFKVuSIGdY",
  authDomain: "csapat-07.firebaseapp.com",
  databaseURL: "https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "csapat-07",
  storageBucket: "csapat-07.appspot.com",
  messagingSenderId: "214412637703",
  appId: "1:214412637703:web:95343c484077e8929a9ca2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);