// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVGT62LezqF8zrGUYhNAwV6h_yugH0zeY",
  authDomain: "clone-57ea9.firebaseapp.com",
  databaseURL: "https://clone-57ea9.firebaseio.com",
  projectId: "clone-57ea9",
  storageBucket: "clone-57ea9.appspot.com",
  messagingSenderId: "20899761656",
  appId: "1:20899761656:web:8d29c6f3ef3569a9e49a0d",
  measurementId: "G-ZTDSQZ3DD6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
