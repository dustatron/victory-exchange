import React from 'react';
import PropTypes from 'prop-types';
import OfferItem from './OfferItem';

function OffersList(props) {
  return (
    <div>
      <h1> Offers List</h1>
      {props.pods.map(pod => {
        return <OfferItem key={pod.podId} pod={pod} />;
      })}

      <hr />
    </div>
  );
}

OffersList.propTypes = {};

export default OffersList;
