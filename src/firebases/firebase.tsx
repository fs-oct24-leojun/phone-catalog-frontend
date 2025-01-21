import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCeLO5igbvWza7amzeomUqmpBlaV2k07bA",

  authDomain: "no-conflicts.firebaseapp.com",

  projectId: "no-conflicts",

  storageBucket: "no-conflicts.firebasestorage.app",

  messagingSenderId: "38434039771",

  appId: "1:38434039771:web:9802511afd808655f7a9fe",

  measurementId: "G-LRMZ3MQSSQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {
  app, auth, analytics 
}
