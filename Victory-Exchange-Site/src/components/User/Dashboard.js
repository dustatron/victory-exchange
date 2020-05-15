import React from 'react';
import firebase from 'firebase';
import { Card } from 'react-bootstrap';
import OfferList from './Offers/OffersList';
import OffersMadeByUser from './Offers/OffersMadeByUser';

function Dashboard() {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h1>Dashbaord</h1>
          <OfferList />
          <OffersMadeByUser />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Dashboard;
