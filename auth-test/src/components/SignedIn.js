import React from 'react';
import PropTypes from 'prop-types';

function SignedIn(props) {
  return (
    <div>
      <h1> Signed In! </h1>
    </div>
  );
}

SignedIn.propTypes = {
  signedIn: PropTypes.bool
};

export default SignedIn;
