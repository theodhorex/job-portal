import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB8SLYEAEIIFLX3EANXi5n4iYc06fUYX8",
  authDomain: "job-portal-app-a416f.firebaseapp.com",
  projectId: "job-portal-app-a416f",
  storageBucket: "job-portal-app-a416f.firebasestorage.app",
  messagingSenderId: "980263838462",
  appId: "1:980263838462:web:1814bf3aebd9f7933fbbaf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
