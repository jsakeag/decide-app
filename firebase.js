import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJkPBxxvSwOuF9OeQm9phetmNxnxu4Hls",
  authDomain: "decide-app-no-billing-8385f.firebaseapp.com",
  projectId: "decide-app-no-billing-8385f",
  storageBucket: "decide-app-no-billing-8385f.appspot.com",
  messagingSenderId: "870982563686",
  appId: "1:870982563686:web:8d9791b2e64f55494dbaa7",
};

export const app = initializeApp(firebaseConfig);
export const { db } = getFirestore(app);
