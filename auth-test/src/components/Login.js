import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AuthContext } from './Auth';
import { Route, Redirect } from 'react-router-dom';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

//Firebase
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

function Login() {
  const auth = firebase.auth();
  // // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      { provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }
    ]
    // callbacks: {
    //   // Avoid redirects after sign-in.
    //   signInSuccessWithAuthResult: setSignedInState(true)
    // }
  };
  // const { currentUser } = useContext(AuthContext);

  // if (isLoaded(auth) && auth.currentUser !== null) {
  //   return <Redirect to="/Dash" />;
  // }

  if (isLoaded(auth) && auth.currentUser === null) {
    return (
      <div>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Header>
                  <h1 className="text-center">My App</h1>
                  <p className="text-center">Please sign-in:</p>
                </Card.Header>
                <Card.Body>
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <Redirect to="/dash" />;
  }
}

export default Login;
