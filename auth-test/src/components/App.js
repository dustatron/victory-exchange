import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import firebase from 'firebase';

//Routes
import Private from './Private';
import Header from './Header';
import SignedIn from './SignedIn';
import Login from './Login';

import PodsList from './PodsList';
import OffersList from './OffersList';
import Home from './Home';
import Dashboard from './Dashboard';

function App(props) {
  const auth = props.auth;
  const notSignedIt = auth.isEmpty;

  console.log('props ==>', auth);
  if (auth.isLoaded) {
    return (
      <Router>
        <Container>
          <Header auth={notSignedIt} />
          <h1> App</h1>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Private path="/podslist" authenticated={notSignedIt} component={PodsList} />
          <Private path="/postslist" authenticated={notSignedIt} component={OffersList} />
          <Private path="/dash" authenticated={notSignedIt} component={Dashboard} />
          <Private path="/signedin" authenticated={notSignedIt} component={SignedIn} />
        </Container>
      </Router>
    );
  } else {
    return <div> ...Loading </div>;
  }
}

// eslint-disable-next-line
App = connect(
  // Map redux state to component props
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })
)(App);
export default App;
