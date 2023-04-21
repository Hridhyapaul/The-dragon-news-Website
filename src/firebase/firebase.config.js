// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKqtPOOcJStrgV2Fq7nF9TSIqXOR-LYZA",
  authDomain: "the-dragon-news-7b12f.firebaseapp.com",
  projectId: "the-dragon-news-7b12f",
  storageBucket: "the-dragon-news-7b12f.appspot.com",
  messagingSenderId: "280151645002",
  appId: "1:280151645002:web:b14e05ba1fe89a2471bfb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;