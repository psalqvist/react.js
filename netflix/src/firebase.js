import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjskCbxzPzSrG1ZmEuYEX5ICR2IQ-BOHE",
    authDomain: "netflix-ad7f3.firebaseapp.com",
    projectId: "netflix-ad7f3",
    storageBucket: "netflix-ad7f3.appspot.com",
    messagingSenderId: "501458852788",
    appId: "1:501458852788:web:0e12b309a4a1ff541ef0e1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;