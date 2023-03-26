import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAo9pMhBvreS-bzLLFBA4G7WwIFEPUBShY',
  authDomain: 'i-make-the-sites-contact-form.firebaseapp.com',
  projectId: 'i-make-the-sites-contact-form',
  storageBucket: 'i-make-the-sites-contact-form.appspot.com',
  messagingSenderId: '352684685707',
  appId: '1:352684685707:web:73eacb35a60492db0e178e',
  measurementId: 'G-WRKBT70P8J',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
