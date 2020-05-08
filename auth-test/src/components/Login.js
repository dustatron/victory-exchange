import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useHistory } from 'react-router-dom'; // if you use react-router
// import GoogleButton from 'react-google-button' // optional

import { Spinner, Card, Row, Col } from 'react-bootstrap';

function Login() {
  const loadingBoxStyle = {
    display: 'flex',
    height: '150px',
    width: '100%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(255,255,255,1) 78%)',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const redirectUrl = '/dash';
  const history = useHistory();
  return (
    <div>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h2>Login</h2>
              </Card.Title>
            </Card.Header>
            {!isLoaded(auth) ? (
              <Spinner animation="border" />
            ) : isEmpty(auth) ? (
              <Card.Body>
                <StyledFirebaseAuth
                  uiConfig={{
                    signInFlow: 'popup',
                    signInSuccessUrl: '/signedIn',
                    signInOptions: [
                      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                      firebase.auth.EmailAuthProvider.PROVIDER_ID
                    ],
                    callbacks: {
                      signInSuccessWithAuthResult: (authResult) => {
                        firebase.handleRedirectResult(authResult).then(() => {
                          history.push(redirectUrl);
                        });
                        return false;
                      }
                    }
                  }}
                  firebaseAuth={firebase.auth()}
                />
              </Card.Body>
            ) : (
              <div style={loadingBoxStyle} className="text-center">
                <Spinner animation="border" role="status" size="lg" className="text-center" size="lg" variant="primary">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
              // <pre>{JSON.stringify(auth, null, 2)}</pre>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
