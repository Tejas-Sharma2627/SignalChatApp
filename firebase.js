import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {
    getAuth,
    onAuthStateChanged,
    FacebookAuthProvider,
    signInWithCredential,
  } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBVyBgmoNhywGAogAuOo3n7-U2_dyhU3tE",
  authDomain: "signal-chat-4a239.firebaseapp.com",
  projectId: "signal-chat-4a239",
  storageBucket: "signal-chat-4a239.appspot.com",
  messagingSenderId: "982993719077",
  appId: "1:982993719077:web:31457678bb0577a85554cc",
};
let app;
app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
