import React from 'react';
// import PropTypes from 'prop-types';
import PodSearch from './PodSearch';
import PodCreate from './PodCreate';
import PodDetails from './PodDetails';
import { Container } from 'react-bootstrap';

import { useFirestore } from 'react-redux-firebase';

function PodsList(props) {
  const podCollection = useFirestore().collection('pods');

  function addPodtoFirestore(event) {
    event.preventDefault();
    podCollection.add({
      test: 'this is a test'
    });
    console.log('pod created');
  }

  return (
    <Container>
      <h1> Pod Control </h1>
      <button onClick={addPodtoFirestore}> add a pod </button>
      <PodSearch />
      <PodCreate />
      <PodDetails />
    </Container>
  );
}

// PodsList.propTypes = {};

export default PodsList;
