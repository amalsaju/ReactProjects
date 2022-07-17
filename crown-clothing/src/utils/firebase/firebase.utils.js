import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBH0wDUfHvLKFllNyBgOsEFPBEf9RhXVAk",
  authDomain: "crown-clothing-db-2b4f3.firebaseapp.com",
  projectId: "crown-clothing-db-2b4f3",
  storageBucket: "crown-clothing-db-2b4f3.appspot.com",
  messagingSenderId: "356209810825",
  appId: "1:356209810825:web:cd9ee2a8bc94d0a6e39558"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGoolePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating User', error.message);
    }

  }


  return userDocRef;

}








