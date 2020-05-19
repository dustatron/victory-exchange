import React, { useState } from 'react';
import OfferList from './Offers/OffersList';
import CurrentPods from './Offers/CurrentPods';
import { useSelector } from 'react-redux';
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase';

//Styling imports
import { Card } from 'react-bootstrap';

function Dashboard() {
  const profile = useSelector(state => state.firebase.profile);

  const currentUser = useSelector(state => state.firebase.auth);
  const podsList = useSelector(state => state.firestore.ordered.selectedPods);

  useFirestoreConnect([ { collection: 'pods', where: [ 'users', 'array-contains', currentUser.uid ], storeAs: 'selectedPods' } ]);

  // useFirestoreConnect([ { collection: 'users', doc: `${currentUser.uid}`, storeAs: '' } ]);

  let renderList;
  let renderPodList;
  const [ offersFromPod, setOffersFromPod ] = useState({});

  if (isLoaded(podsList)) {
    renderPodList = <CurrentPods pods={podsList} onPodClick={setOffersFromPod} />;
    if (offersFromPod.id) {
      renderList = <OfferList thisPodId={offersFromPod.id} podName={offersFromPod.title} />;
    } else {
      setOffersFromPod(podsList[0]);
    }
  }

  return (
    <React.Fragment>
      {renderPodList ? renderPodList : 'Loading...'}
      <Card>
        <Card.Body>{renderList ? renderList : 'Loading...'}</Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Dashboard;
