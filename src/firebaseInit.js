import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage';
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCIkk9zVeQ31z8bNiPBGWTb1AzpvTT3YVY",
  authDomain: "translation-e34ce.firebaseapp.com",
  projectId: "translation-e34ce",
  storageBucket: "translation-e34ce.appspot.com",
  messagingSenderId: "200903256471",
  appId: "1:200903256471:web:4d108edab4bd2d95fffcd2",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, storage, auth, db,getFirestore};