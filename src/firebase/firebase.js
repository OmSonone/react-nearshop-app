import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBfD2yrN-ho5UblVPKYVTzKulkmZhNFxkU",
    authDomain: "protean-fabric-273520.firebaseapp.com",
    databaseURL: "https://protean-fabric-273520.firebaseio.com",
    projectId: "protean-fabric-273520",
    storageBucket: "protean-fabric-273520.appspot.com",
    messagingSenderId: "182340408146",
    appId: "1:182340408146:web:5be28efe9eb50ac303208b",
    measurementId: "G-06BLF4CDMC"
  };

  firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get a reference to the place in the database where the user is stored
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return getUserDocumentRef(userAuth.uid);
};

export const getUserDocumentRef = async uid => {
  if (!uid) return null;

  try {
    return firestore.doc(`users/${uid}`);
  } catch (error) {
    console.error('error fetching user', error.message);
  }
};

export default firebase;
