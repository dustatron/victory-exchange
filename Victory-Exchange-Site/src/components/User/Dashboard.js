import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OfferList from './Offers/OffersList';
import CurrentPods from './Offers/CurrentPods';
import { useSelector } from 'react-redux';
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase';

//Styling imports
import { Card } from 'react-bootstrap';

function Dashboard(props) {
  const profile = useSelector(state => state.firebase.profile);
  const currentUser = useSelector(state => state.firebase.auth);

  useFirestoreConnect([ { collection: 'pods', where: [ 'users', 'array-contains', currentUser.uid ], storeAs: 'selectedPods' } ]);

  const [ offersFromPod, setOffersFromPod ] = useState({}); //retire soon...

  const [ offersSelection, setOffersSelection ] = useState([]);
  const [ offerTitle, setOfferTitle ] = useState('');
  const podsList = useSelector(state => state.firestore.ordered.selectedPods);

  const handleSelectingPod = (all, pod) => {
    if (all) {
      setOffersSelection([]);
      setOfferTitle('');
    } else {
      setOffersSelection([ pod.id ]);
      setOfferTitle(pod.title);
    }
  };

  let renderList;
  let renderPodList;

  if (isLoaded(podsList)) {
    const podsArray = podsList.map(pod => pod.id);
    renderPodList = <CurrentPods pods={podsList} onPodClick={handleSelectingPod} />;

    if (offersSelection.length > 0) {
      renderList = <OfferList podsIdArray={offersSelection} podName={offerTitle} whenUpdateViewClick={props.updateViewState} />;
    } else {
      setOffersSelection(podsArray);
      setOfferTitle('All Pods');
    }
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Header>{renderPodList ? renderPodList : 'Loading...'}</Card.Header>
        <Card.Body>{renderList ? renderList : 'Loading...'}</Card.Body>
      </Card>
    </React.Fragment>
  );
}
Dashboard.propTypes = {
  updateViewState: PropTypes.func
};
export default Dashboard;
