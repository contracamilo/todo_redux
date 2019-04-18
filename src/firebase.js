import  firebase from 'firebase/app';
import 'firebase/database'
// Initialize Firebase

var config = {
    apiKey: "AIzaSyAAvlrFK1qZf2fxMsZ92cuzk4UWnCeYXtM",
    authDomain: "diary-ec006.firebaseapp.com",
    databaseURL: "https://diary-ec006.firebaseio.com",
    projectId: "diary-ec006",
    storageBucket: "diary-ec006.appspot.com",
    messagingSenderId: "733759818514"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');