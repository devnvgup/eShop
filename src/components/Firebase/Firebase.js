// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyCw2fgcMWP16pzt3E_Iz_cWbQgyQo4aQbQ",
    authDomain: "eshop-dba91.firebaseapp.com",
    projectId: "eshop-dba91",
    storageBucket: "eshop-dba91.appspot.com",
    messagingSenderId: "1021941288352",
    appId: "1:1021941288352:web:f78c68acb1a334389ba8c5",
    measurementId: "G-HYSZPFLLFB"
};

const app = () => {
    return initializeApp(firebaseConfig)
};
//   const analytics = getAnalytics(app);
const db = getFirestore(app());
const auth = getAuth(app()); 
if (window.location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, 'localhost', 8080);
  }



export default app