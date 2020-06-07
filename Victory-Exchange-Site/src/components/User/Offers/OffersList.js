import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
// Component
import OfferItem from './OfferItem';

function OffersList({ currentOffers, whenUpdateViewClick, podName }) {
  if (currentOffers) {
    return (
      <div>
        <h2 className='text-center'>{podName}</h2>
        <hr />
        {currentOffers.length > 0 ? (
          currentOffers.map((offer) => (
            <OfferItem
              key={offer.id}
              offer={offer}
              onUpdateViewState={whenUpdateViewClick}
            />
          ))
        ) : (
          <p className='text-center'> No offers yet </p>
        )}
      </div>
    );
  } else {
    return 'loading...';
  }
}

// Component Setup
OffersList.propTypes = {
  whenUpdateViewClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentOffers: state.firestore.ordered.currentOffers,
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'offers',
      where: ['podId', 'in', props.podsIdArray],
      storeAs: 'currentOffers',
    },
  ]),
  connect(mapStateToProps)
)(OffersList);
