import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import './scss/_app.scss';
function App(props) {
  const auth = props.auth;
  const notSignedIt = auth.isEmpty;

  if (auth.isLoaded) {
    return (
      <Router>
        <Layout login={notSignedIt}>
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Switch>
            {/* PRIVATE ROUTE  */}
            <PrivateRoute
              path='/dashboard'
              authenticated={notSignedIt}
              component={UserControl}
            />
            <PrivateRoute
              path='/findpods'
              authenticated={notSignedIt}
              component={PodControl}
            />
          </Switch>
        </Layout>
      </Router>
    );
  } else {
    return (
      /////////////  LOADING SPINNER WAITING ON FIREBASE AUTH ///////////////
      <Container>
        <Row>
          <Col md={{ span: 9, offset: 1 }}>
            <div className='loader-box-style'>
              <Card className='loader-box-style-card'>
                <Card.Header>
                  <Card.Title className='text-center'>
                    Victory Exchange is Loading
                  </Card.Title>
                </Card.Header>
                <div className='text-center style-body'>
                  <Spinner
                    animation='border'
                    role='status'
                    size='lg'
                    className='text-center this-spinner'
                    variant='primary'>
                    <span className='sr-only'>Loading...</span>
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
  ({ firebase: { auth, profile, uid } }) => ({
    auth,
    profile,
    uid,
  })
)(App);
export default App;
