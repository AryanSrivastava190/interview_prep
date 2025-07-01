import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBf9bgLswSP-t15uEhCTsDD9zjqkWUCwrY",
    authDomain: "prepwise-d31f3.firebaseapp.com",
    projectId: "prepwise-d31f3",
    storageBucket: "prepwise-d31f3.firebasestorage.app",
    messagingSenderId: "734727403036",
    appId: "1:734727403036:web:eb904203606c67da3a11d9",
    measurementId: "G-TQGRFN7JK4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);