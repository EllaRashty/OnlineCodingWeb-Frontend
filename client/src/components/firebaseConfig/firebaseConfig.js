import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlhCJmQcm0cpRLVq3PlL062Mv6-JYnnxo",
  authDomain: "codeblock-376c1.firebaseapp.com",
  projectId: "codeblock-376c1",
  storageBucket: "codeblock-376c1.appspot.com",
  messagingSenderId: "163240305260",
  appId: "1:163240305260:web:b602088f28d8b7eeed2e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
