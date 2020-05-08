import React, { useState, useEffect } from 'react';
// import React from 'react';
// import { Container, Card, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

//Routes
import SignedIn from './SignedIn';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Header from './Header';

//Firebase
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true });
      console.log('The user is logged in');
    } else {
      callback({ loggedIn: false });
      console.log('The user is signed out');
    }
  });
}

function App(props) {
  const [ user, setUser ] = useState({ loggedIn: false });

  // const auth = firebase.auth();

  // Configure FirebaseUI.
  // const uiConfig = {
  //   // Popup signin flow rather than redirect flow.
  //   // signInFlow: 'popup',
  //   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //   signInSuccessUrl: '/signedIn',
  //   // We will display Google and Facebook as auth providers.
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     { provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }
  //   ]
  //   // callbacks: {
  //   //   // Avoid redirects after sign-in.
  //   //   signInSuccessWithAuthResult: setSignedInState(true)
  //   // }
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  // if (isLoaded(auth) && auth.currentUser !== null) {
  //   return <span>User is logged in</span>;
  // } else {
  //   return (
  //     <span>
  //       <LoginView />
  //     </span>
  //   );
  // }

  return (
    <React.Fragment>
      <AuthProvider>
        <Header />
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signedin" component={SignedIn} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
