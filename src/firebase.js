import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDCnkl5svxqgYtiP9RetVN4s-d2NMOYQ4I",
    authDomain: "disney-plus-clone-f7ff2.firebaseapp.com",
    projectId: "disney-plus-clone-f7ff2",
    storageBucket: "disney-plus-clone-f7ff2.appspot.com",
    messagingSenderId: "256637186181",
    appId: "1:256637186181:web:f6f7916d9bb53ebfd4b9ec"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
