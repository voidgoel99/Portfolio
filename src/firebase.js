import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore'
const firebaseApp =initializeApp({
    apiKey: "AIzaSyCYFKm9clA-4s0BAptYO0LTcSoUAegcec0",
    authDomain: "my-portfolio-10baa.firebaseapp.com",
    projectId: "my-portfolio-10baa",
    storageBucket: "my-portfolio-10baa.appspot.com",
    messagingSenderId: "4626208816",
    appId: "1:4626208816:web:d594e1c1790a62d4fdf5f5",
    measurementId: "G-SFJLW0P827"
});

const db = getFirestore(firebaseApp);
export default db;