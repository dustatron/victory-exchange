import React from 'react';
// import PropTypes from 'prop-types';
import PodSearch from './PodSearch';
import PodCreate from './PodCreate';
import PodDetails from './PodDetails';
import PodList from './PodList';

import { Container } from 'react-bootstrap';

function PodsList(props) {
  return (
    <Container>
      <h1> Pod Control </h1>
      <PodList />
      <PodSearch />
      <PodCreate />
      <PodDetails />
    </Container>
  );
}

// PodsList.propTypes = {};

export default PodsList;
