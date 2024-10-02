import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3Cz2_LBohOCi_ErpOPL7IViSDhSsjSBw",
    authDomain: "pfinalreactjs.firebaseapp.com",
    projectId: "pfinalreactjs",
    storageBucket: "pfinalreactjs.appspot.com",
    messagingSenderId: "462223425332",
    appId: "1:462223425332:web:375454ad1c2e8b63756f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const data = getFirestore(app);