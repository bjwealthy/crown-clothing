import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtb91yU2h1a4Ib2X8F8wXHuzma_9GH39Y",
    authDomain: "crwn-db-28932.firebaseapp.com",
    databaseURL: "https://crwn-db-28932.firebaseio.com",
    projectId: "crwn-db-28932",
    storageBucket: "crwn-db-28932.appspot.com",
    messagingSenderId: "287721611508",
    appId: "1:287721611508:web:72c70295a9f0fccec5bea1",
    measurementId: "G-HDMH4BCXM9"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message)
        }
    }
    return userRef;
    console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;