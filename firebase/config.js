/* eslint-disable import/prefer-default-export */
// FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAR5Vza2N3sAjWaaFircYGQR1j8s2xedJ4',
  authDomain: 'handymaninnewcaslte-web.firebaseapp.com',
  projectId: 'handymaninnewcaslte-web',
  storageBucket: 'handymaninnewcaslte-web.appspot.com',
  messagingSenderId: '221932810530',
  appId: '1:221932810530:web:c16f8ea11b0f6ef744f57b'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
