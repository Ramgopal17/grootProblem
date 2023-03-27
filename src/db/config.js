const firebase=require("firebase")
const firebaseConfig = {
  apiKey: "AIzaSyCg8KtZ4eB7KfbcMg8Qka6fgQ08ZLFdOQo",
  authDomain: "fir-auth-d0c19.firebaseapp.com",
  projectId: "fir-auth-d0c19",
  storageBucket: "fir-auth-d0c19.appspot.com",
  messagingSenderId: "470176066949",
  appId: "1:470176066949:web:8eaba5c447cdd83faba8ec",
  measurementId: "G-8G7Q3BHJ27"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

exports.Task=db.collection("Tasks")


firebase.firestore.FieldValue.serverTimestamp()


