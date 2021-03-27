import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDVsvuD74v0Sw8b3K4utUCDnjatnbzud4A",
  authDomain: "project75-1fb57.firebaseapp.com",
  projectId: "project75-1fb57",
  storageBucket: "project75-1fb57.appspot.com",
  messagingSenderId: "973427611250",
  appId: "1:973427611250:web:6b7c4f496d8548140994eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
