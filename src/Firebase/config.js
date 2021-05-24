import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhrLPvPO8NrK3NFpXwjEzQFN5bLZ38gm4",
  authDomain: "reactjs-bd5a7.firebaseapp.com",
  projectId: "reactjs-bd5a7",
  storageBucket: "reactjs-bd5a7.appspot.com",
  messagingSenderId: "260609940849",
  appId: "1:260609940849:web:8c72b18d0434d9cb272ad0",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
