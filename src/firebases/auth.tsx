import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut 
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = 
async (email: string, password: string) => 
  createUserWithEmailAndPassword(auth, email, password);

export const doSignInWithEmailAndPassword = 
async (email: string, password: string) => 
  signInWithEmailAndPassword(auth, email, password);

export const doSignOut = () => {
  return signOut(auth);
}