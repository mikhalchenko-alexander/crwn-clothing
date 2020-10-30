import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBMwo0NcxJtISZIN2_2GtuTMSOQqOZQyCw',
  authDomain: 'crwn-db-9d851.firebaseapp.com',
  databaseURL: 'https://crwn-db-9d851.firebaseio.com',
  projectId: 'crwn-db-9d851',
  storageBucket: 'crwn-db-9d851.appspot.com',
  messagingSenderId: '57836673262',
  appId: '1:57836673262:web:4e49687b7f8d035af5bbff'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({ 'prompt': 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(authProvider);

export const createCollectionAndDocuments = async (collection, documents) => {
  let collectionReference = firestore.collection(collection);
  let batch = firestore.batch();
  documents.forEach(document => {
    let documentReference = collectionReference.doc();
    batch.set(documentReference, document);
  });
  await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
