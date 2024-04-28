// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_APIKEY)


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "art-scape-client.firebaseapp.com",
  projectId: "art-scape-client",
  storageBucket: "art-scape-client.appspot.com",
  messagingSenderId: "1016294235545",
  appId: "1:1016294235545:web:a9a6704829166bcf510708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
