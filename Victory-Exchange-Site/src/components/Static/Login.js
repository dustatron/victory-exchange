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

  const cardStyle = {
    marginTop: '3rem'
  };

  //// Location for redirection after sign up
  const redirectUrl = '/dashboard';

  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();

  return (
    <div>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Card style={cardStyle}>
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
                    signInSuccessUrl: '/dashboard',
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
                <Spinner animation="border" role="status" size="lg" className="text-center" variant="primary">
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
