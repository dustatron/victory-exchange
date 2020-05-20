import React from 'react';
import PropTypes from 'prop-types';
import OfferItem from './OfferItem';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function OffersList(props) {
  useFirestoreConnect([ { collection: 'offers', where: [ 'podId', 'in', props.podsIdArray ], storeAs: 'currentOffers' } ]);

  const currentOffers = useSelector(state => state.firestore.ordered.currentOffers);
  let renderOffers;
  if (isLoaded(currentOffers)) {
    renderOffers = currentOffers.map(offer => {
      return <OfferItem key={offer.id} offer={offer} onUpdateViewState={props.whenUpdateViewClick} />;
    });
  }

  return (
    <div>
      <h2> {props.podName}</h2>
      <hr />
      {renderOffers}
    </div>
  );
}

OffersList.propTypes = {
  whenUpdateViewClick: PropTypes.func
};

export default OffersList;
