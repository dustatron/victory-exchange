import React from 'react';
import PropTypes from 'prop-types';
import PodSearch from './PodSearch';
import PodCreate from './PodCreate';
import PodDetails from './PodDetails';

function PodsList(props) {
  return (
    <div>
      <h1> Pod Control </h1>
      <PodSearch />
      <PodCreate />
      <PodDetails />
    </div>
  );
}

PodsList.propTypes = {};

export default PodsList;
