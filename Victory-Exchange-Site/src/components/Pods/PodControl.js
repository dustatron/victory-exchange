import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import PodSearch from './PodSearch';
import PodCreate from './PodCreate';
import PodDetails from './PodDetails';
import PodList from './PodList';
import PodMenu from './PodMenu';

import styled from 'styled-components';
// import GlobalStyle from '../Layout/GlobalStyle';

import { Container } from 'react-bootstrap';

function PodsList(props) {
  /////////////////// STYLES ////////////////////////////
  const GridLayout = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
  `;
  const LeftMenu = styled.div`grid-area: 1 / 1 / 2 / 2;`;
  const RightBody = styled.div`grid-area: 1 / 2 / 2 / 4;`;

  //////////////////// Click Handlers ////////////////////////
  const [ viewState, setViewState ] = useState(0);

  const renderView = (view) => {
    switch (view) {
      case 0:
        return <PodList />;
      case 1:
        return <PodSearch />;
      case 2:
        return <PodCreate />;
      case 3:
        return <PodDetails />;
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
        <RightBody>
          {renderView(viewState)}
          {/* <PodList />
          <PodSearch />
          <PodCreate />
          <PodDetails /> */}
        </RightBody>
      </GridLayout>
    </Container>
  );
}

// PodsList.propTypes = {};

export default PodsList;
