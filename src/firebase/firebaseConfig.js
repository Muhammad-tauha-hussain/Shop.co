import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  

  apiKey: "AIzaSyC4G51gDboWXsMlGINjNI3axQ_inMhJEbI",
  authDomain: "shopco-88be5.firebaseapp.com",
  projectId: "shopco-88be5",
  storageBucket: "shopco-88be5.firebasestorage.app",
  messagingSenderId: "280560449135",
  appId: "1:280560449135:web:24f74acdb99309be18ff9a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);




// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,


