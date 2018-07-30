import Firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import Rebase from "re-base";

var config = {
  apiKey: "AIzaSyApKqrgr8wN6fxmn2YG3Ki6QHCo9Pe2mbU",
  authDomain: "samsung-notes-web.firebaseapp.com",
  databaseURL: "https://samsung-notes-web.firebaseio.com",
  projectId: "samsung-notes-web",
  storageBucket: "samsung-notes-web.appspot.com",
  messagingSenderId: "412058492182"
};

const app = Firebase.initializeApp(config);

export const ref = Firebase.database().ref();
export const firebaseAuth = Firebase.auth;
export const base = Rebase.createClass(app.database());
export const storage = Firebase.storage();
