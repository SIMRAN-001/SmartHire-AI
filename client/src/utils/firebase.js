import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "smarthire-ai-4c740.firebaseapp.com",
  projectId: "smarthire-ai-4c740",
  storageBucket: "smarthire-ai-4c740.firebasestorage.app",
  messagingSenderId: "501048969999",
  appId: "1:501048969999:web:8e884f39dea7e3f014cc7a",
  measurementId: "G-HY723RPH33"
};


const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}