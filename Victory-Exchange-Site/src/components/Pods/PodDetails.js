import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import PodUserList from './PodUserList';
import PodEdit from './PodEdit';
import PodItemView from './PodItemView';
import { Card, Row, Col, Button } from 'react-bootstrap';

function PodDetails(props) {
  const selectedPod = useSelector((state) => state.selectedPod);
  const [ viewState, setViewState ] = useState(0);

  const renderView = (view) => {
    switch (viewState) {
      case 0:
        return (
          <PodItemView
            title={selectedPod.title}
            tagLine={selectedPod.tagLine}
            podImg={selectedPod.podImg}
            description={selectedPod.description}
            onEditClick={setViewState}
          />
        );
      case 1:
        return <PodEdit />;
      default:
        return (
          <PodItemView
            title={selectedPod.title}
            tagLine={selectedPod.tagLine}
            podImg={selectedPod.podImg}
            description={selectedPod.description}
            onEditClick={setViewState}
          />
        );
    }
  };
  return <div> {renderView(viewState)}</div>;
}

PodDetails.propTypes = {
  thisPod: PropTypes.func
};

export default PodDetails;
