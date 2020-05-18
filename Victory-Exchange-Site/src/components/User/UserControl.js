import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ProfileDetails from './Profiles/ProfileDetails';
import MyOffers from './Offers/MyOffers';
import OfferCreate from './Offers/OfferCreate';

//styling
import { Container } from 'react-bootstrap';
import { GridLayout, RightBody, LeftMenu, MenuBox, MenuItem } from './../Layout/GlobalStyle';

function UserControl() {
  const [ viewState, setViewState ] = useState(0);
  const renderView = view => {
    switch (view) {
      case 0:
        return <Dashboard />;
      case 1:
        return <OfferCreate />;
      case 2:
        return <MyOffers />;
      case 3:
        return <ProfileDetails />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <Container>
      <GridLayout>
        <LeftMenu>
          <MenuBox>
            <MenuItem
              onClick={() => {
                setViewState(0);
              }}>
              All Offers
            </MenuItem>

            <MenuItem
              onClick={() => {
                setViewState(1);
              }}>
              New Offer
            </MenuItem>

            <MenuItem
              onClick={() => {
                setViewState(2);
              }}>
              Your Offers
            </MenuItem>

            <MenuItem
              onClick={() => {
                setViewState(3);
              }}>
              Profile
            </MenuItem>
          </MenuBox>
        </LeftMenu>
        <RightBody>{renderView(viewState)}</RightBody>
      </GridLayout>
    </Container>
  );
}

export default UserControl;
