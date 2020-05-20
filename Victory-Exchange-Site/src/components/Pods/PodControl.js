import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PodSearch from './PodSearch';
import PodCreate from './PodCreate';
import PodDetails from './PodDetails';
import PodList from './PodList';
import PodMenu from './PodMenu';

import { GridLayout, LeftMenu, RightBody } from '../Layout/GlobalStyle';

import { Container } from 'react-bootstrap';

function PodsList(props) {
  //////////////////// Click Handlers ////////////////////////

  const [ viewState, setViewState ] = useState(0);
  // const [ selectedPodState, setSelectedPodState ] = useState({}); // retire
  const selectedPod = useSelector(state => state.selectedPod);

  const renderView = view => {
    switch (view) {
      case 0:
        return <PodList upDateViewState={setViewState} />;
      case 1:
        return <PodSearch updateViewState={setViewState} />;
      case 2:
        return <PodCreate updateViewState={setViewState} />;
      case 3:
        return <PodDetails updateViewState={setViewState} />;
      default:
        return <PodList />;
    }
  };

  return (
    <Container>
      <GridLayout>
        <LeftMenu>
          <PodMenu onMenuClick={setViewState} />
        </LeftMenu>
        <RightBody>{renderView(viewState)}</RightBody>
      </GridLayout>
    </Container>
  );
}

export default PodsList;
