import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCi7MCVqhmFS5vD0w9oRRDV1n6AV87joXs",
  authDomain: "crwn-db-dylan.firebaseapp.com",
  databaseURL: "https://crwn-db-dylan.firebaseio.com",
  projectId: "crwn-db-dylan",
  storageBucket: "crwn-db-dylan.appspot.com",
  messagingSenderId: "465142782524",
  appId: "1:465142782524:web:e09006dc8ad41f1c69c139",
  measurementId: "G-630RGZXDR6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
