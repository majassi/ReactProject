import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDINRBwff3bbm6NjNnvGFPI3wZkLCkaGM",
  authDomain: "react-ff305.firebaseapp.com",
  projectId: "react-ff305",
  storageBucket: "react-ff305.appspot.com",
  messagingSenderId: "382748812619",
  appId: "1:382748812619:web:0c675dd25ef881188ef4ce",
  measurementId: "G-11K7MGPRBH"
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
