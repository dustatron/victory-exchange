import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function RequireAuth(props) {
  console.log('login', props.login);
  const auth = firebase.onAuthStateChanged();
  if (isLoaded(props.login)) {
    if (!props.login) {
      return <Redirect to="/login" />;
    }
    return props.children;
  }
}

export default RequireAuth;
