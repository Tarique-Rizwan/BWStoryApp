// firebaseConfig.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAirFhY_2_gJvYP8RQi4ReWzQXJVDBczHU",
  authDomain: "bwstoryapp.firebaseapp.com",
  projectId: "bwstoryapp",
  storageBucket: "bwstoryapp.firebasestorage.app",
  messagingSenderId: "915252175310",
  appId: "1:915252175310:web:6fb5c03a8ed6b1158d8b9f",
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
