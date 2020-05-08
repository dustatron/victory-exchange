import React, { useState, useEffect } from 'react';
// import { Container, Card, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

//Routes
import SignedIn from './SignedIn';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { AuthProvider, AuthContext } from './Auth';

import Header from './Header';
import Dashboard from './Dashboard';

import firebase from 'firebase';
import Private from './Private';

function App(props) {
  const auth = props.auth;
  const notSignedIt = auth.isEmpty;
  console.log('props ==>', auth);
  if (auth.isLoaded) {
    return (
      <Router>
        <div>
          <h1> App</h1>
          <Route path="/login" component={Login} />
          <Route path="/dash" component={Dashboard} />
          <Private path="/signedin" authenticated={notSignedIt} component={SignedIn} />
        </div>
      </Router>
    );
  } else {
    return <div> ...Loading </div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};
// eslint-disable-next-line
App = connect(
  // Map redux state to component props
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })
)(App);
export default App;
