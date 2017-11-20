import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCqOUima6Rhrggm5zBrH94hYrJomKPJMYI",
    authDomain: "trello-c1d34.firebaseapp.com",
    databaseURL: "https://trello-c1d34.firebaseio.com",
    projectId: "trello-c1d34",
    storageBucket: "trello-c1d34.appspot.com",
    messagingSenderId: "100658355333"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
