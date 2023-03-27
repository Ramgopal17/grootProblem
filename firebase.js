// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg8KtZ4eB7KfbcMg8Qka6fgQ08ZLFdOQo",
  authDomain: "fir-auth-d0c19.firebaseapp.com",
  projectId: "fir-auth-d0c19",
  storageBucket: "fir-auth-d0c19.appspot.com",
  messagingSenderId: "470176066949",
  appId: "1:470176066949:web:8eaba5c447cdd83faba8ec",
  measurementId: "G-8G7Q3BHJ27"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { app, auth }


