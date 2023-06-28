import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwtyLstUFKQ36gDa1Z_Tv309A74rLFXAE",
  authDomain: "notes-app-69df1.firebaseapp.com",
  projectId: "notes-app-69df1",
  storageBucket: "notes-app-69df1.appspot.com",
  messagingSenderId: "890391290187",
  appId: "1:890391290187:web:9c185ef1be3999a4e308ce",
  measurementId: "G-BDQKX4WL5T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");