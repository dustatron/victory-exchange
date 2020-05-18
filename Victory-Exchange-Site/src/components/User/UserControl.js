import React from 'react';
import Dashboard from './Dashboard';
import ProfileDetails from './Profiles/ProfileDetails';
import ProfileEdit from './Profiles/ProfileEdit';

//styling
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function UserControl() {
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
  return (
    <Container>
      <h1>UserControl</h1>
      <GridLayout>
        <LeftMenu>Left menu</LeftMenu>
        <RightBody>
          <Dashboard />
          <ProfileDetails />
          <ProfileEdit />
        </RightBody>
      </GridLayout>
    </Container>
  );
}

export default UserControl;
