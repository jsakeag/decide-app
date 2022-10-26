import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDONMU7Mq8i65o-MwxnkFXSJxcvZQ1sErA",
  authDomain: "decide-app-no-billing.firebaseapp.com",
  projectId: "decide-app-no-billing",
  storageBucket: "decide-app-no-billing.appspot.com",
  messagingSenderId: "675493154607",
  appId: "1:675493154607:web:d7b48cf4b5bbe97fbb1bda",
  measurementId: "G-H0RDS11VNZ",
};

//if no firebase app, initialize else use existing app
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
