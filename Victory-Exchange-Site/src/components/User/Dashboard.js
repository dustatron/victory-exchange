import React, { useState } from 'react';
import OfferList from './Offers/OffersList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

//Styling imports
import { Card } from 'react-bootstrap';

function Dashboard() {
  const profile = useSelector(state => state.firebase.profile);
  const currentUser = useSelector(state => state.firebase.auth);

  useFirestoreConnect([ { collection: 'pods' }, { collection: 'pods', where: [ `ownerId`, '==', `${currentUser.uid}` ], storeAs: 'usersPods' } ]);

  let renderList;

  const pods = useSelector(state => state.firestore.ordered.pods);
  if (isLoaded(pods)) {
    console.log('pods', pods);
    renderList = <OfferList pods={pods} />;
  }
  // const [ podListState, setPodListState ] = useState([]);

  return (
    <React.Fragment>
      <Card>
        <Card.Body>{renderList}</Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Dashboard;
