import firebase from 'firebase/app'
import 'firebase/firestore'  //This will import database to our file
import 'firebase/auth'
import 'firebase/analytics'
var firebaseConfig = {
    apiKey: "AIzaSyAi4k1gTMqxHq7BLkqxCznUoiJvegyMqCA",
    authDomain: "fireweb-f3c61.firebaseapp.com",
    projectId: "fireweb-f3c61",
    storageBucket: "fireweb-f3c61.appspot.com",
    messagingSenderId: "694615333634",
    appId: "1:694615333634:web:e9c591636d7ac35754c01b",
    measurementId: "G-W1H30NHGKQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  //This thing help react project connect to firebase project
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;