import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJkPBxxvSwOuF9OeQm9phetmNxnxu4Hls",
  authDomain: "decide-app-no-billing-8385f.firebaseapp.com",
  projectId: "decide-app-no-billing-8385f",
  storageBucket: "decide-app-no-billing-8385f.appspot.com",
  messagingSenderId: "870982563686",
  appId: "1:870982563686:web:8d9791b2e64f55494dbaa7",
};

//const app = initializeApp(firebaseConfig);
//if no firebase app, initialize else use existing app
//!firebase.apps.length
//  ? /*firebase.*/ initializeApp(firebaseConfig)
//  : firebase.app();

firebase.initializeApp(firebaseConfig);
export default firebase;
