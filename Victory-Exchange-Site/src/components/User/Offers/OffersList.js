import React from 'react';
import PropTypes from 'prop-types';
import OfferItem from './OfferItem';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function OffersList(props) {
  useFirestoreConnect([ { collection: 'offers', where: [ 'podId', '==', props.thisPodId ], storeAs: 'currentOffers' } ]);

  const currentOffers = useSelector(state => state.firestore.ordered.currentOffers);
  let renderOffers;
  if (isLoaded(currentOffers)) {
    renderOffers = currentOffers.map(offer => {
      return <p key={offer.id}> {offer.title}</p>;
    });
  }

  return (
    <div>
      <h1> {props.podName}</h1>
      <hr />
      {renderOffers}
    </div>
  );
}

OffersList.propTypes = {};

export default OffersList;
