// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "PROJECT.firebaseapp.com",
  projectId: "PROJECTID",
  storageBucket: "PROJECT.appspot.com",
  messagingSenderId: "SENDERID",
  appId: "APPID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
