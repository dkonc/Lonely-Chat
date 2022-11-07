import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBomvqg9iUcefcxEghLZCl9POtdHz0c-8E",

  authDomain: "lonely-chat-10440.firebaseapp.com",

  projectId: "lonely-chat-10440",

  storageBucket: "lonely-chat-10440.appspot.com",

  messagingSenderId: "250629440762",

  appId: "1:250629440762:web:e2f96c3f73b692f8ce3543"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
