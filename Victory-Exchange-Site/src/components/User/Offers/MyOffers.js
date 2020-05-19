import React from 'react';
import OfferItem from './OfferItem';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function OffersMadeByUser() {
  const currentUser = useSelector(state => state.firebase.auth);

  useFirestoreConnect([ { collection: 'offers', where: [ 'authorId', '==', currentUser.uid ], storeAs: 'currentUsersOffers' } ]);
  const currentUsersOffers = useSelector(state => state.firestore.ordered.currentUsersOffers);

  let renderOffers;
  if (isLoaded(currentUsersOffers)) {
    renderOffers = currentUsersOffers.map(offer => <OfferItem offer={offer} />);
  }

  return (
    <div>
      Offers Made By User
      {renderOffers}
    </div>
  );
}

export default OffersMadeByUser;
