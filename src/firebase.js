// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firebase"


const firebaseConfig = {
  apiKey: "AIzaSyCKfposDxI2hY1_bH8SFIr7SFixDprSdIk",
  authDomain: "transaction-3a3ed.firebaseapp.com",
  projectId: "transaction-3a3ed",
  storageBucket: "transaction-3a3ed.appspot.com",
  messagingSenderId: "1043932287075",
  appId: "1:1043932287075:web:2fae7ddec58ae0db292856",
  measurementId: "G-GSN4D332LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)