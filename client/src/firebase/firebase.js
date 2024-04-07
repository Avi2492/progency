import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_APP_API_KEY),
  authDomain: String(import.meta.env.VITE_FIREBASE_APP_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_FIREBASE_APP_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_FIREBASE_APP_STORAGE_BUCKET),
  messagingSenderId: String(
    import.meta.env.VITE_FIREBASE_APP_MESSAGE_SENDER_ID
  ),
  appId: String(import.meta.env.VITE_FIREBASE_APP_APP_ID),
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
