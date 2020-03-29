import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBh_twx8oULGQAInP64xJh9RbHfMm0uVfI",
    authDomain: "brainitsite.firebaseapp.com",
    databaseURL: "https://brainitsite.firebaseio.com",
    projectId: "brainitsite",
    storageBucket: "brainitsite.appspot.com",
    messagingSenderId: "536683577031",
    appId: "1:536683577031:web:dbf22bbecb49aa7cdf88e2",
    measurementId: "G-QZKGHH7RE8"
});

const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default db;