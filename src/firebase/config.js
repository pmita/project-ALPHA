/* eslint-disable import/prefer-default-export */
// FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
};

firebase.initializeApp(firebaseConfig);

// FIRESTORE EXPORTS
export const firestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

// AUTH EXPORTS
export const fireAuth = firebase.auth();
