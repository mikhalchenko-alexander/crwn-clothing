import { firestore } from './firebase.utils';

export const saveUser = async (userData, additionalData) => {
  const userRef = firestore.doc(`/users/${ userData.uid }`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userData;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user: ', error.message);
    }
  }

  return userRef;
};
