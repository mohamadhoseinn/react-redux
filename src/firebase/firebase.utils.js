import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCYiM5TuIVbfjn25pEs0RVrHTi0rPiFCxI",
  authDomain: "ecommerce-f3c4c.firebaseapp.com",
  projectId: "ecommerce-f3c4c",
  storageBucket: "ecommerce-f3c4c.appspot.com",
  messagingSenderId: "473660477966",
  appId: "1:473660477966:web:43944d6d2783b4530a225f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
