// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1jLUd_AQ-ZPD2B6ncB5qJ5Wff8Sb9g2Q",
  authDomain: "contact-app-fdc9d.firebaseapp.com",
  projectId: "contact-app-fdc9d",
  storageBucket: "contact-app-fdc9d.appspot.com",
  messagingSenderId: "585275432135",
  appId: "1:585275432135:web:5333d6f3605180db4cf2e2",
  measurementId: "G-0LHJPWB8YB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db=getFirestore(app)