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

function Dashboard({ fullListOfUsersPods, currentOffers }) {
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

  let renderUsersPods;

  if (isLoaded(fullListOfUsersPods) && fullListOfUsersPods.length > 0) {
    // Grab list of pod Ids
    const ListOfPodId = fullListOfUsersPods.map((pod) => pod.id);

    renderUsersPods = (
      <CurrentPods pods={fullListOfUsersPods} onPodClick={handleSelectingPod} />
    );

    // Set to Show All
    if (offersSelection.length === 0) {
      setOffersSelection(ListOfPodId);
      setOfferTitle('All Pods');
    }
  } else {
    renderUsersPods = 'You have not joined a Pod yet';
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          {renderUsersPods ? renderUsersPods : 'Loading...'}
        </Card.Header>
        <Card.Body>
          {offersSelection.length > 0 ? (
            <OfferList podsIdArray={offersSelection} podName={offerTitle} />
          ) : (
            'Loading...'
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

// Component Setup

Dashboard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  fullListOfUsersPods: PropTypes.array.isRequired,
};

const mapStateProps = (state) => ({
  currentUser: state.firebase.auth,
  currentOffers: state.firestore.data.currentOffers,
  fullListOfUsersPods: state.firestore.ordered.selectedPods,
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
