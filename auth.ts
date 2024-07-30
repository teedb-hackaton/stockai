import { getAuth, onAuthStateChanged, getIdToken, signOut as firebaseSignOut } from 'firebase/auth';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { Session } from './lib/types';
import { auth } from './utils/firebase';

// Function to get the session
export const getSession = async (): Promise<Session | null> => {
  const user = auth.currentUser;
  if (user) {
    const idToken = await getIdToken(user);
    return {
      user: {
        id: user.uid,
        email: user.email!
      }
    };
  } else {
    return null;
  }
};

export const signOut = async (): Promise<void> => {
    try {
      await firebaseSignOut(auth);
      // Optionally, you might want to handle any additional logic after sign-out, 
      // like redirecting the user to a login page
    } catch (error) {
      console.error('Sign out error:', error);
      // Handle the error appropriately in your application
    }
  };
