import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';
import { useTransition, animated } from 'react-spring';

//Static Routes
import Login from './Static/Login';
import Home from './Static/Home';
import Contact from './Static/Contact';
import Page404 from './Static/Page404';

import PrivateRoute from './Layout/PrivateRoute';
import Layout from './Layout/Layout';

import UserControl from './User/UserControl';
import PodControl from './Pods/PodControl';
import './scss/_app.scss';

function App(props) {
  const location = useLocation();
  let transitionData = {
    from: '',
    to: '',
    leave: '',
  };
  if (props.toggleDirection) {
    transitionData = {
      from: 'translateX(100%)',
      enter: 'translateX(0)',
      leave: 'translateX(-50%)',
    };
  } else {
    transitionData = {
      from: 'translateX(-100%)',
      enter: 'translateX(0)',
      leave: 'translateX(50%)',
    };
  }
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 1, transform: transitionData.from },
    enter: { opacity: 1, transform: transitionData.enter },
    leave: { opacity: 1, transform: transitionData.leave },
  });
  const auth = props.auth;
  const notSignedIt = auth.isEmpty;

  if (auth.isLoaded) {
    return transitions.map(({ item: location, props, key }) => (
      <Layout login={notSignedIt}>
        <animated.div key={key} style={props} className='content'>
          <Switch location={location}>
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            {/* PRIVATE ROUTE  */}
            <PrivateRoute
              path='/dashboard'
              authenticated={notSignedIt}
              component={Page404}
            />
            <PrivateRoute
              path='/findpods'
              authenticated={notSignedIt}
              component={PodControl}
            />
            <Route component={Page404} />
          </Switch>
        </animated.div>
      </Layout>
    ));
  } else {
    return (
      /////////////  LOADING SPINNER WAITING ON FIREBASE AUTH ///////////////
      <Container className='content'>
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
// Setting up redux state
const mapStateToProps = ({
  toggleDirection,
  firebase: { auth, profile, uid },
}) => ({
  toggleDirection,
  auth,
  profile,
  uid,
});
export default connect(mapStateToProps)(App);
