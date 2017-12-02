import firebase, { auth } from "firebase";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyB8Sd0mxj3M4qJ31g2-D7aRZdoAPHFNRPo",
    authDomain: "samsungnotes-8871a.firebaseapp.com",
    databaseURL: "https://samsungnotes-8871a.firebaseio.com",
    projectId: "samsungnotes-8871a",
    storageBucket: "",
    messagingSenderId: "1070682851409"
};
firebase.initializeApp(config);

export const Auth = auth();
export default firebase;
export const provider = new auth.GoogleAuthProvider();
