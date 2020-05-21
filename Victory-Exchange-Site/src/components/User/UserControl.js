import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ProfileDetails from './Profiles/ProfileDetails';
import MyOffers from './Offers/MyOffers';
import OfferEdit from './Offers/OfferEdit';
import OfferCreate from './Offers/OfferCreate';

//styling
import { Container, Row, Col } from 'react-bootstrap';
import { MenuBox, MenuItem } from './../Layout/GlobalStyle';

function UserControl() {
  const [ viewState, setViewState ] = useState(0);
  const renderView = view => {
    switch (view) {
      case 0:
        return <Dashboard updateViewState={setViewState} />;
      case 1:
        return <OfferCreate updateViewState={setViewState} />;
      case 2:
        return <MyOffers updateViewState={setViewState} />;
      case 3:
        return <ProfileDetails />;
      case 4:
        return <OfferEdit updateViewState={setViewState} />;
      default:
        return <Dashboard updateViewState={setViewState} />;
    }
  };
  return (
    <Container>
      <div style={{ margin: '10px 0' }}>
        <Row>
          <Col md={2}>
            <MenuBox>
              <MenuItem
                onClick={() => {
                  setViewState(0);
                }}>
                Offers
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setViewState(1);
                }}>
                Make Offer
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
          </Col>

          <Col style={{ margin: '10px 0' }} md={9}>
            {renderView(viewState)}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default UserControl;
