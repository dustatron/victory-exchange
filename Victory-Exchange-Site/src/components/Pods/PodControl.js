import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PodSearch from './PodSearch';
import PodCreate from './PodCreate';
import PodDetails from './PodDetails';
import PodList from './PodList';
import PodMenu from './PodMenu';
import MyPods from './MyPods';

import { GridLayout, LeftMenu, RightBody } from '../Layout/GlobalStyle';

import { Container, Row, Col } from 'react-bootstrap';

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
      case 4:
        return <MyPods updateViewState={setViewState} />;
      default:
        return <PodList updateViewState={setViewState} />;
    }
  };

  return (
    <Container>
      <div style={{ margin: '10px 0' }}>
        <Row>
          <Col md={2}>
            <PodMenu onMenuClick={setViewState} />
          </Col>
          <Col style={{ margin: '10px 0' }} md={9}>
            {renderView(viewState)}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default PodsList;
