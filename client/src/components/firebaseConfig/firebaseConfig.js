import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHr7sWyOo-OsbqpcWsiuIVaV7I8w1vqW8",
  authDomain: "codeblock-74967.firebaseapp.com",
  projectId: "codeblock-74967",
  storageBucket: "codeblock-74967.appspot.com",
  messagingSenderId: "377958881263",
  appId: "1:377958881263:web:d04d70a21f33fc0e39081a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
