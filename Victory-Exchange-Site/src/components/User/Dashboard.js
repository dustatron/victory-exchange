import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
// Styling imports
import { Card } from 'react-bootstrap';
// Components
import OfferList from './Offers/OffersList';
import CurrentPods from './Offers/CurrentPods';

function Dashboard({ currentUser, podsList }) {
  const [offersSelection, setOffersSelection] = useState([]);
  const [offerTitle, setOfferTitle] = useState('');

  const handleSelectingPod = (all, pod) => {
    if (all) {
      setOffersSelection([]);
      setOfferTitle('');
    } else {
      setOffersSelection([pod.id]);
      setOfferTitle(pod.title);
    }
  };

  let renderList;
  let renderPodList;

  if (isLoaded(podsList) && podsList.length > 0) {
    const podsArray = podsList.map((pod) => pod.id);
    renderPodList = (
      <CurrentPods pods={podsList} onPodClick={handleSelectingPod} />
    );

    if (offersSelection.length > 0) {
      renderList = (
        <OfferList podsIdArray={offersSelection} podName={offerTitle} />
      );
    } else {
      setOffersSelection(podsArray);
      setOfferTitle('All Pods');
    }
  } else {
    renderPodList = 'You have not joined a Pod yet';
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          {renderPodList ? renderPodList : 'Loading...'}
        </Card.Header>
        <Card.Body>{renderList ? renderList : 'Loading...'}</Card.Body>
      </Card>
    </React.Fragment>
  );
}
Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  podsList: PropTypes.array.isRequired,
};

const mapStateProps = (state) => ({
  currentUser: state.firebase.auth,
  podsList: state.firestore.ordered.selectedPods,
});

export default compose(
  connect(mapStateProps),
  firestoreConnect((props) => [
    {
      collection: 'pods',
      where: ['users', 'array-contains', props.currentUser.uid],
      storeAs: 'selectedPods',
    },
  ])
)(Dashboard);
