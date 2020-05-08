import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//Static Routes
import Login from './Static/Login';
import Home from './Static/Home';
import About from './Static/About';
import Contact from './Static/Contact';

import PrivateRoute from './Layout/PrivateRoute';
import Layout from './Layout/Layout';

import Dashboard from './User/Dashboard';

import PodsList from './Pods/PodsList';
import OffersList from './Offers/OffersList';

function App(props) {
  const auth = props.auth;
  const notSignedIt = auth.isEmpty;

  if (auth.isLoaded) {
    return (
      <Router>
        <Layout login={notSignedIt}>
          {/* <Header auth={notSignedIt} /> */}
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />

          {/* PRIVATE ROUTE  */}
          <PrivateRoute path="/dashboard" authenticated={notSignedIt} component={Dashboard} />
          <PrivateRoute path="/podslist" authenticated={notSignedIt} component={PodsList} />
          <PrivateRoute path="/postslist" authenticated={notSignedIt} component={OffersList} />
        </Layout>
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
