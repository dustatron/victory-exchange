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
import { AuthProvider, AuthContext } from './Auth';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import Dashboard from './Dashboard';
import RequiredAuth from './RequireAuth';

//Firebase
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// function onAuthStateChange(callback) {
//   return firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       callback({ loggedIn: true });
//       console.log('The user is logged in');
//     } else {
//       callback({ loggedIn: false });
//       console.log('The user is signed out');
//     }
//   });
// }

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

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChange(setUser);
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

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
    <AuthProvider>
      <Router>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dash" component={Dashboard} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

// <Router>
//   {/* <Header /> */}
//   <Switch>
//     <Route path="/login" component={Login} />
//     <Route path="/home" component={Home} />
//     <RequiredAuth login={user.loggedIn}>
//       <Route path="/dash" component={Dashboard} />
//     </RequiredAuth>
//   </Switch>
// </Router>
