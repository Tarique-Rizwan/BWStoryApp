// firebaseConfig.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // Your Firebase configuration here
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
