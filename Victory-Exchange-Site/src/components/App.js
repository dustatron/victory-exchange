import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';

//Static Routes
import Login from './Static/Login';
import Home from './Static/Home';
import Contact from './Static/Contact';

import PrivateRoute from './Layout/PrivateRoute';
import Layout from './Layout/Layout';

import UserControl from './User/UserControl';

import PodControl from './Pods/PodControl';
import OffersList from './User/Offers/OffersList';

function App(props) {
  const auth = props.auth;
  const notSignedIt = auth.isEmpty;

  const loadingBoxStyle = {
    display: 'flex',
    height: '100%',
    width: '100%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(255,255,255,1) 78%)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

  const loaderBoxStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  if (auth.isLoaded) {
    return (
      <Router>
        <Layout login={notSignedIt}>
          <Route exact path="/home" component={Home} />
          {/* <Redirect exact from={'/'} to={'/home'} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />

          {/* PRIVATE ROUTE  */}
          <PrivateRoute path="/dashboard" authenticated={notSignedIt} component={UserControl} />
          <PrivateRoute path="/findpods" authenticated={notSignedIt} component={PodControl} />
        </Layout>
      </Router>
    );
  } else {
    return (
      /////////////  LOADING SPINNER WAITING ON FIREBASE AUTH ///////////////
      <Container>
        <Row>
          <Col md={{ span: 9, offset: 1 }}>
            <div style={loaderBoxStyle}>
              <Card style={{ width: '75%', height: '50%' }}>
                <Card.Header>
                  <Card.Title className="text-center">Victory Exchange is Loading</Card.Title>
                </Card.Header>
                <div style={loadingBoxStyle} className="text-center">
                  <Spinner
                    animation="border"
                    role="status"
                    size="lg"
                    className="text-center"
                    size="lg"
                    variant="primary"
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
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
