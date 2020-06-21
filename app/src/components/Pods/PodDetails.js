import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PodEdit from './PodEdit';
import PodItemView from './PodItemView';

function PodDetails(props) {
  const selectedPod = useSelector((state) => state.selectedPod);
  const [viewState, setViewState] = useState(0);

  const renderView = (view) => {
    switch (viewState) {
      case 0:
        return <PodItemView onEditClick={setViewState} />;
      case 1:
        return <PodEdit onUpdateClick={setViewState} />;
      default:
        return <PodItemView onEditClick={setViewState} />;
    }
  };
  return (
    <div>
      {' '}
      {selectedPod === '' ? <p> no selected pod </p> : renderView(viewState)}
    </div>
  );
}

PodDetails.propTypes = {
  thisPod: PropTypes.func,
};

export default PodDetails;
