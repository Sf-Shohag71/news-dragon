// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpCphIRpLt6MkT4YcKD2GwB-1rlubtU0Q",
  authDomain: "the-news-dragon-2f7e3.firebaseapp.com",
  projectId: "the-news-dragon-2f7e3",
  storageBucket: "the-news-dragon-2f7e3.appspot.com",
  messagingSenderId: "657235169909",
  appId: "1:657235169909:web:8045367d359267a83bde3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;