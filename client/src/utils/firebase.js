import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDPhEgUjnfOTushCFm5APcYuSbdaP_W0i4",
  authDomain: "fir-1437d.firebaseapp.com",
  projectId: "fir-1437d",
  storageBucket: "fir-1437d.firebasestorage.app",
  messagingSenderId: "1039705255058",
  appId: "1:1039705255058:web:bb0a108ed439a7ee444a4b",
  measurementId: "G-RDHQBYB6WB"
};


const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}