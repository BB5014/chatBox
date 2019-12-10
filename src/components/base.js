import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

// To connect at firebase

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCUSG6OA1Mw8C05395sMT_V5Sm9IF4wDGY",
    authDomain: "chatbox-app-51961.firebaseapp.com",
    databaseURL: "https://chatbox-app-51961.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;