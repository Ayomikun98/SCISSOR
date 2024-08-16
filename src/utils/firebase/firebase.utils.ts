import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkVXOSGa-R9agS4NxR9RYhWHHDSP5XLho",
  authDomain: "scissor-fc666.firebaseapp.com",
  projectId: "scissor-fc666",
  storageBucket: "scissor-fc666.appspot.com",
  messagingSenderId: "512513949825",
  appId: "1:512513949825:web:737df066ff58581acc4d80",
  measurementId: "G-GW1041WW77"
};

// Initialize Firebase
const fireabaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(fireabaseApp);

export const db = getFirestore(fireabaseApp);

