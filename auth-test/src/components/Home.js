import React from 'react';
// import PropTypes from 'prop-types';
import firebase from 'firebase';

function Home(props) {
  return (
    <div>
      <h1> Welcome home</h1>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        logout
      </button>
    </div>
  );
}

// Home.propTypes = {};

export default Home;
