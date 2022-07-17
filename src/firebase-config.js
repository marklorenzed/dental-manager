import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAPynOOq2SEy_hadPiG6E-EjE2133e-pRI",
    authDomain: "dental-manager-6b7d8.firebaseapp.com",
    projectId: "dental-manager-6b7d8",
    storageBucket: "dental-manager-6b7d8.appspot.com",
    messagingSenderId: "388622255264",
    appId: "1:388622255264:web:ce48871075d96bc35335c5",
    measurementId: "G-DSL8EW4ZDF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

