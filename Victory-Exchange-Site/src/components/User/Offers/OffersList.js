import React from 'react';
import PropTypes from 'prop-types';
import OfferItem from './OfferItem';

function OffersList(props) {
  return (
    <div>
      <h1> Offers List</h1>
      <OfferItem />
      <hr />
    </div>
  );
}

OffersList.propTypes = {};

export default OffersList;
