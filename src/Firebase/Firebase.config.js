// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK46t69qe6k3u7C29JtwNg-spVdacvvos",
  authDomain: "my-first-next-app-ef2e9.firebaseapp.com",
  projectId: "my-first-next-app-ef2e9",
  storageBucket: "my-first-next-app-ef2e9.firebasestorage.app",
  messagingSenderId: "149914323848",
  appId: "1:149914323848:web:a4d1cf59d1a04de277483d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);