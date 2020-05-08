import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);
  const auth = firebase.auth();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
    console.log('auth =>', currentUser);
  }, []);

  if (isLoaded(auth) && currentUser !== null) {
    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
  } else {
    return <div> ...Loading </div>;
  }
};
