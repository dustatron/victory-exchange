import React from 'react';
import PropTypes from 'prop-types';
import OfferItem from './OfferItem';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function OffersMadeByUser(props) {
  const currentUser = useSelector(state => state.firebase.auth);

  useFirestoreConnect([ { collection: 'offers', where: [ 'authorId', '==', currentUser.uid ], storeAs: 'currentUsersOffers' } ]);
  const currentUsersOffers = useSelector(state => state.firestore.ordered.currentUsersOffers);

  let renderOffers;
  if (isLoaded(currentUsersOffers)) {
    renderOffers = currentUsersOffers.map(offer => <OfferItem offer={offer} key={offer.id} onUpdateViewState={props.updateViewState} />);
  }

  return (
    <div>
      <h2> Your Offers </h2>
      {renderOffers}
    </div>
  );
}

OffersMadeByUser.propTypes = {
  updateViewState: PropTypes.func
};

export default OffersMadeByUser;
