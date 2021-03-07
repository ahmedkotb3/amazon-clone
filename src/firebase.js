// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqYEjWD26T7sVmnCPwyONT-QGhBuicTSI",
  authDomain: "clone-b8fb0.firebaseapp.com",
  projectId: "clone-b8fb0",
  storageBucket: "clone-b8fb0.appspot.com",
  messagingSenderId: "102385501724",
  appId: "1:102385501724:web:afcdcf65b70379770681d9",
  measurementId: "G-S3G8G82L5F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
